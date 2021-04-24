import React, { Component } from 'react' // Sans React dans le scope, pas de JSX
import './../../styles/AvatarInput.css'

class AvatarInput extends Component {
    constructor(props) {
        super(props);
        this.handleDragEntree = this.handleDragEntree.bind(this);
        this.handleDragSortie = this.handleDragSortie.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    // entrée drag hover
    handleDragEntree() {
        this.props.onDragEnter({
            ...this.props.data,
            msg: 'Glissez ici votre image',
            isHover: true
        });
    }

    // sortie drag hover
    handleDragSortie() {
        this.props.onDragLeave({
            ...this.props.data,
            msg: 'Déposer votre image',
            isHover: false
        });
    }

    // drop image
    handleDrop(e){
        const image = e.dataTransfer.items[0].getAsFile();
        let reader = new FileReader();
        reader.onload = () => {
            this.props.onDrop({
                ...this.props.data,
                src: reader.result,
                isLoading: true
            });
        };
        reader.readAsDataURL(image);
    }

    render() {
        let contentDrop;
        if (!this.props.data.isLoading) {
            contentDrop = <span>{this.props.data.msg}</span>
        }
        return(
            <div>
                <label className="content-box">
                    <input type="file" name="file" onDragEnter={this.handleDragEntree} onDragLeave={this.handleDragSortie} onDrop={this.handleDrop} onClick={(e) => e.preventDefault} />
                    {contentDrop}
                    <img src={this.props.data.src} alt="" />
                </label>
            </div>
        )
    }
    
}

export default AvatarInput;
