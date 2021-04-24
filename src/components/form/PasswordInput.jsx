import React, { Component } from 'react' // Sans React dans le scope, pas de JSX
import PropTypes from 'prop-types'

class PasswordInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    validate(data){
        const {value, confirm} = data;
        if(value.length > 0 && confirm.length > 0){
            return value === confirm;
        }
    }

    handleChange(event){
        const {name, value} = event.target
        const valid = this.validate({
            ...this.props.data,
            [name]: value
        })
        this.props.onChange({
            ...this.props.data,
            [name]: value,
            valid
        })
    }

    render() {
        const { valid, value, confirm } = this.props.data;
        return(
            <div>
                {(valid === false) && <p style={{color: 'red'}}>
                    Attention ! Les mots de passe ne sont pas identique</p>
                }
                <label>Mot de passe : <input type="password" name="value" value={value} onChange={this.handleChange} /></label>
                <br/>
                <label>Confirmation du mot de passe : <input type="password" name="confirm" value={confirm} onChange={this.handleChange} /></label>
            </div>
        )
    }
    
}

export default PasswordInput;

PasswordInput.propTypes = {
    props: PropTypes.object
}
