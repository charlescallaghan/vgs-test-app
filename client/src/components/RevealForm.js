import React, { useContext } from 'react';
import { Context } from '../Store'
import axios from 'axios'
import '../App.css'

const RevealForm = () => {

    const [tokenisedData, setTokenisedData] = useContext(Context);

    const numberField = document.getElementById("cc-number");
    const expField = document.getElementById("cc-exp-date");
    const cvcField = document.getElementById("cvc-code");

    const handleClick = (event) => {
        event.preventDefault();
        const { card_number, card_exp, card_cvc } = tokenisedData.tokenisedData;
        numberField.setAttribute('value', card_number);
        expField.setAttribute('value', card_exp);
        cvcField.setAttribute('value', card_cvc);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const tokens = tokenisedData;
        axios.post('https://e1827c52d684.ngrok.io/data/reveal', tokens)
        .then(response => {
            const { card_number, card_exp, card_cvc } = response.data;
            numberField.setAttribute('value', card_number);
            expField.setAttribute('value', card_exp);
            cvcField.setAttribute('value', card_cvc);
        })

    }

    return (
            
            <form className="form" onSubmit={handleSubmit}>
                <input id="cc-number" className="form-field" placeholder="Card number"></input>
                <div className="form-field-group">
                    <input id="cc-exp-date" className="form-field" placeholder="MM / YY"></input>
                    <input id="cvc-code" className="form-field" placeholder="CVC"></input>
                </div>
                <button onClick={handleClick} className="form-button">Fill In Aliased Data</button>
                <button type="submit" className="form-button">Reveal</button>
            </form>

    )
}

export default RevealForm
