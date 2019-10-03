import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        let angle = Math.random() * 90 - 45;
        let xpos = Math.random() * 40 - 20;
        let ypos = Math.random() * 40 - 20;
        this._transform = `translate(${xpos}px, ${ypos}px) rotate(${angle}deg)`;
    }
    render() {

        return (
            <img style={{ transform: this._transform }}
                className='Card'
                src={this.props.image}
                alt={this.props.name} />
        );
    }
}

export default Card;