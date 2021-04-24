import React, { Component } from 'react' // Sans React dans le scope, pas de JSX
import PropTypes from 'prop-types'

class EmailInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    validate(data){
        const {value} = data;
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return regex.test(value);
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
        const { valid, value } = this.props.data;
        return(
            <div>
                {(valid === false) && <p style={{color: 'red'}}>
                    Attention ! L'adresse email n'est pas correcte</p>
                }
                <label>Email : <input type="email" name="value" value={value} onChange={this.handleChange} /></label>
            </div>
        )
    }
    
}

export default EmailInput;

EmailInput.propTypes = {
    props: PropTypes.object
}
