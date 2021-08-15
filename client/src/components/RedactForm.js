import React, { useContext } from 'react';
import { Context } from '../Store'
import axios from 'axios'
import '../App.css'

const RedactForm = () => {

    const [tokenisedData, setTokenisedData] = useContext(Context);

    const handleClick = (event) => {
        event.preventDefault();
        const { card_number, card_exp, card_cvc } = tokenisedData.tokenisedData
        document.getElementById("cc-number").setAttribute('value', card_number);
        document.getElementById("cc-exp-date").setAttribute('value', card_exp);
        document.getElementById("cvc-code").setAttribute('value', card_cvc);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const tokens = tokenisedData;
        axios.post('https://e1827c52d684.ngrok.io/data/redact', tokens)
        .then(response => console.log(response));

    }

    return (
            
            <form className="form" onSubmit={handleSubmit}>
                <input id="cc-number" className="form-field" placeholder="Card number"></input>
                <div className="form-field-group">
                    <input id="cc-exp-date" className="form-field" placeholder="MM / YY"></input>
                    <input id="cvc-code" className="form-field" placeholder="CVC"></input>
                </div>
                <button onClick={handleClick} className="form-button">Fill In Aliased Data</button>
                <button type="submit" className="form-button">Redact</button>
            </form>

    )
}

export default RedactForm
