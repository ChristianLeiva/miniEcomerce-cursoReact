import React, { Component } from 'react'
import '../App.css';


//Class componets
export class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
        };
    }

    hiddenImage = () => {
        this.setState({
            hidden: !this.state.hidden,
        });
    };


    render() {
        return (
            <>
                {!this.state.hidden && (
                    <img src={this.props.src} className="App-logo" alt="logo" />
                )}
                <button onClick={this.hiddenImage}>
                    {this.state.hidden ? 'Mostrar' : 'Ocultar'}
                </button>
            </>
        );
    }
}

export default Image;