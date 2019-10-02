import React, { Component } from "react";
import axios from "axios";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = { deck: null, drawn: [] };
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState = ({ deck: deck.data });
    }

    async getCard() {
        let deck_id = this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            if (cardRes.data.remaining === 0) {
                throw new Error("No card remaining!")
            }
        }


            console.log(cardRes.data);
        let card = cardRes.data.cards[0];
        this.setState(st => ({
            drawn: [
                {
                    id: card.code,
                    img: card.image,
                    name: `${card.value} of ${card.suit}`
                }
            ]
        }))
        // "https://deckofcardsapi.com/api/deck/${cardUrl}/draw"
        // const API_URL = "https://deckofcardsapi.com/api/deck/${deck_id}/draw/";
        // //make request using deck id
        // axios.get()
        // //set state using new card from api

    }

    render() {
        return (
            <div className="App" >
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card!</button>
            </div>
        );
    }
}
export default Deck;