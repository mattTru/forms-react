import React, { Component } from 'react' // Sans React dans le scope, pas de JSX
import PropTypes from 'prop-types'

class RevenuInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target
        this.props.onChange({
            ...this.props.data,
            [name]: value,
        })
    }

    render() {
        const { value } = this.props.data;
        return(
            <div>
                <label>Revenu mensuel : <input type="number" name="value" value={value} onChange={this.handleChange} /></label>
            </div>
        )
    }
    
}

export default RevenuInput;

RevenuInput.propTypes = {
    props: PropTypes.object
}
