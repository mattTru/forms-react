import React, { Component } from 'react' // Sans React dans le scope, pas de JSX
import PropTypes from 'prop-types'

class DateInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    validate(data){
        const {value} = data;
        if ( new Date(value).getTime() < new Date().getTime() )
        return true;
        return false;    
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
                    Attention ! La date de naissance ne doit pas être dans le futur</p>
                }
                <label>Date de naissance : <input type="date" name="value" value={value} onChange={this.handleChange} /></label>
            </div>
        )
    }
    
}

export default DateInput;

DateInput.propTypes = {
    props: PropTypes.object
}
