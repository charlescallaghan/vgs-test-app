import React, { useState, useContext, useRef, useEffect } from 'react';
import { Context } from '../Store'
import axios from 'axios'
import '../App.css'

const RevealForm = () => {

  console.log('Welcome to the trial branch!')

  const ngrokURL = 'https://1596b6d695be.ngrok.io'

    const [tokenisedData] = useContext(Context);
    const [buttonState, toggleButton] = useState(true)

    useEffect(() => {
      if (Object.keys(tokenisedData).length > 0) {
        toggleButton(false)
      } else {
        toggleButton(true)
      }
  });

    let cardNumber = useRef();
    let expDate = useRef();
    let cvc = useRef();

    const handleClick = (event) => {
        event.preventDefault();
        const { card_number, card_exp, card_cvc } = tokenisedData.tokenisedData;
        cardNumber.current.setAttribute('value', card_number);
        expDate.current.setAttribute('value', card_exp);
        cvc.current.setAttribute('value', card_cvc);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const tokens = tokenisedData;
        axios.post(`${ngrokURL}/data/reveal`, tokens)
        .then(response => {
            const { card_number, card_exp, card_cvc } = response.data;
            cardNumber.current.setAttribute('value', card_number);
            expDate.current.setAttribute('value', card_exp);
            cvc.current.setAttribute('value', card_cvc);
        })
    }

    return (

        <>
        <form id="collect-form" onSubmit={handleSubmit}>
          <div className="group">
            <label>
              <span>Card number</span>
              <input id="cc-number" className="field" disabled={true} ref={cardNumber}/>
            </label>
            <label>
              <span>Expiry date</span>
              <input id="cc-exp-date" className="field" disabled={true} ref={expDate}/>
            </label>
            <label>
              <span>CVC</span>
              <input id="cvc-code" className="field" disabled={true} ref={cvc}/>
            </label>
          </div>
          <button onClick={handleClick} className="form-button" disabled={buttonState}>Fill In Aliased Data</button>
          <button type="submit" className="form-button" disabled={buttonState}>Reveal</button>
        </form>
      </>

    )
}

export default RevealForm
