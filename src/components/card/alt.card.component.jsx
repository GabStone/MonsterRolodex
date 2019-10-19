import React, { Component } from 'react';
import './card.styles.css';

/**
 * The same as card.component but this version is class based
 * To change the card.list component to use this class simply change the import in card-list.component.jsx
 */
export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.monster.name,
            imgId: props.monster.id,
            img: ''
        };
    }

    componentDidMount() {
        fetch('https://robohash.org/1?set=set' + this.state.imgId)
            .then(response => {
                    console.log(response);
                    this.setState({img: response.url})
                }
            )
    }

    render() {
        return (
            <div className='card-container'>
                <img src={this.state.img} />
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
