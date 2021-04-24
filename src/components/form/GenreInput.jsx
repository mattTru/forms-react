import React, { Component } from 'react' // Sans React dans le scope, pas de JSX
import PropTypes from 'prop-types'

class GenreInput extends Component {
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
        return(
            <div>
                <label><input type="radio" name="value" value="homme" onChange={this.handleChange}/>&nbsp;Homme</label>
                <label style={{marginLeft: "10px"}}><input type="radio" name="value" value="femme" onChange={this.handleChange}/>&nbsp;Femme</label>
                <label style={{marginLeft: "10px"}}><input type="radio" name="value" value="autre" onChange={this.handleChange}/>&nbsp;Autre</label>
            </div>
        )
    }
    
}

export default GenreInput;

GenreInput.propTypes = {
    props: PropTypes.object
}
