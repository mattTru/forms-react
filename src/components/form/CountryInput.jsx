import React, { Component } from 'react' // Sans React dans le scope, pas de JSX
import PropTypes from 'prop-types'

class CountryInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    validate(data){
        const {value} = data;
        return value !== '-1';
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
        const { valid, dataCountry} = this.props.data;
        const optionListCountry = Object.entries(dataCountry).map(([key, value]) => {
            return <option key={key} value={key}>{value}</option>
        });
        return(
            <div>
                {(valid === false) && <p style={{color: 'red'}}>
                    Attention ! Vous devez choisir un pays</p>
                }
                <label>Choisissez votre pays :&nbsp;
                    <select name="value" onChange={this.handleChange}>
                        <option value="-1">Choisir un pays</option>
                        {optionListCountry}
                    </select>
                </label>
            </div>
        )
    }
    
}

export default CountryInput;

CountryInput.propTypes = {
    props: PropTypes.object
}
