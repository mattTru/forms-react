import React, { Component } from 'react' // Sans React dans le scope, pas de JSX
import PropTypes from 'prop-types'

class ConditionInput extends Component {
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
        const { checked } = this.props.checked;
        return(
            <div>
                <label>J'accepte les conditions : <input name="accept" type="checkbox" checked={checked} onChange={this.handleChange} /></label>
            </div>
        )
    }
    
}

export default ConditionInput;

ConditionInput.propTypes = {
    props: PropTypes.object
}
