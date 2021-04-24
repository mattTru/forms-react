import React, { Component } from 'react' // Sans React dans le scope, pas de JSX
import PropTypes from 'prop-types'

class IdentityInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    strUcFirst(str){
        return (str +'').charAt(0).toUpperCase()+ str.substr(1);
    }

    handleChange(event){
        const {name, value} = event.target
        
        // nom
        if (name === 'nom'){
            let newNom = '';
            newNom = value.toUpperCase();
            this.props.onChange({    
                ...this.props.data,
                [name]: newNom,
            })
        }
        
        // prenom
        if (name === 'prenom'){
            this.props.onChange({    
                ...this.props.data,
                [name]: this.strUcFirst(value),
            })
        }
    }
    
    render() {
        const { nom, prenom } = this.props.data;
        return(
            <div>
                <label>Nom : <input type="text" name="nom" value={nom} onChange={this.handleChange} /></label>
                <label>&nbsp;Prénom : <input type="text" name="prenom" value={prenom} onChange={this.handleChange} /></label>
            </div>
        )
    }
    
}

export default IdentityInput;

IdentityInput.propTypes = {
    props: PropTypes.object
}
