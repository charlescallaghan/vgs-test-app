import React, { useEffect, useContext } from 'react';
import { Context } from '../Store'
import axios from 'axios'
import '../App.css'

const RevealForm = () => {

    const [tokenisedData, setTokenisedData] = useContext(Context);

    const handleClick = (event) => {
        event.preventDefault();
        const { card_number, card_exp, card_cvc } = tokenisedData.tokenisedData;
        document.getElementById("cc-number").setAttribute('value', card_number);
        document.getElementById("cc-exp-date").setAttribute('value', card_exp);
        document.getElementById("cvc-code").setAttribute('value', card_cvc);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const tokens = tokenisedData;
        axios.post('https://e1827c52d684.ngrok.io/data/reveal', tokens)
        .then(response => {
            const { card_number, card_exp, card_cvc } = response.data;
            document.getElementById("cc-number").setAttribute('value', card_number);
            document.getElementById("cc-exp-date").setAttribute('value', card_exp);
            document.getElementById("cvc-code").setAttribute('value', card_cvc);
        })
    }

    return (

        <>
        <form id="collect-form" onSubmit={handleSubmit}>
          <div className="group">
            <label>
              <span>Card number</span>
              <input id="cc-number" className="field" disabled={true}/>
            </label>
            <label>
              <span>Expiry date</span>
              <input id="cc-exp-date" className="field" disabled={true}/>
            </label>
            <label>
              <span>CVC</span>
              <input id="cvc-code" className="field" disabled={true}/>
            </label>
          </div>
          <button onClick={handleClick} className="form-button">Fill In Aliased Data</button>
          <button type="submit" className="form-button">Reveal</button>
        </form>
      </>

    )
}

export default RevealForm
