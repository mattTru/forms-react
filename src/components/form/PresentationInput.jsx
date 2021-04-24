import React, { Component } from 'react' // Sans React dans le scope, pas de JSX
import PropTypes from 'prop-types'

class PresentationInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    validate(data){
        const {value} = data;
        return value.split(/\b\w+\b/).length - 1 <= 100;
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
                    Attention ! Le texte ne doit pas dépasser 100 mots</p>
                }
                <label>Présentation : <textarea name="value" value={value} onChange={this.handleChange} /></label>
            </div>
        )
    }
    
}

export default PresentationInput;

PresentationInput.propTypes = {
    props: PropTypes.object
}
