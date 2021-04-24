import React, { Component } from 'react'
import CountryInput from './form/CountryInput'
import IdentityInput from './form/IdentityInput'
import PasswordInput from './form/PasswordInput'
import EmailInput from './form/EmailInput'
import DateInput from './form/DateInput'
import RevenuInput from './form/RevenuInput'
import PresentationInput from'./form/PresentationInput'
import GenreInput from './form/GenreInput'
import ConditionInput from './form/ConditionInput'
import AvatarInput from './form/AvatarInput'
import './../styles/Form.css'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            identity: { nom: '', prenom: '' },
            email: { value: '', valid: null },
            password: { value: '', confirm: '', valid: null },
            dateBirth: { value: '', valid: null },
            revenu: { value: '' },
            presentation: { value: '', valid: null },
            genre: { value: '' },
            condition: { accept: '' },
            country: { dataCountry: {}, value: '', valid: null },
            avatar: { msg: 'Déposer votre image', isLoading: false, isHover: false },
            error: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.fetchData();
    }

    erreurVerification(){
        if( this.state.email.valid && this.state.password.valid && this.state.dateBirth.valid && this.state.presentation.valid && this.state.country.valid ){
            this.setState({
                error: false
            })
        } else {
            this.setState({
                error: true
            })
        }
    }

    handleChange(attr, event){
        this.setState({
            [attr]: event
        }, this.erreurVerification)
        
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    handleDrop(data) {
        this.setState({
            avatar: data
        })
    }

    fetchData(){
        fetch('http://localhost:3000/country.json')
        .then((res) => res.json())
        .then((obj) => {
            const value = obj;
            const object = this.state.country;
            object['dataCountry'] = value;
            this.setState({
                country: object,
            });
        });
    }

    render(){
        
        return <form className="form" onSubmit={this.handleSubmit}>
            <h1 style={{marginBottom: "30px", textAlign: "center"}}>Formulaire React JS</h1>
            <IdentityInput data={this.state.identity} onChange={(event) => this.handleChange('identity', event)} />
            <EmailInput data={this.state.email} onChange={(event) => this.handleChange('email', event)} />
            <PasswordInput data={this.state.password} onChange={(event) => this.handleChange('password', event)} />
            <DateInput data={this.state.dateBirth} onChange={(event) => this.handleChange('dateBirth', event)} />
            <RevenuInput data={this.state.revenu} onChange={(event) => this.handleChange('revenu', event)} />
            <PresentationInput data={this.state.presentation} onChange={(event) => this.handleChange('presentation', event)} />
            <GenreInput onChange={(event) => this.handleChange('genre', event)} />
            <CountryInput data={this.state.country} onChange={(event) => this.handleChange('country', event)} />
            <ConditionInput checked={this.state.condition} onChange={(event) => this.handleChange('condition', event)} />
            <AvatarInput data={this.state.avatar} onDragEnter={(data) => this.handleDrop(data)} onDragLeave={(data) => this.handleDrop(data)} onDrop={(data) => this.handleDrop(data)} />
            <input disabled={this.state.error} type="submit" value="S'inscrire" style={{marginTop: "10px"}}/>
        </form>
    }
}