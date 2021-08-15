import React, { useContext } from 'react';
import { Context } from '../Store'
import '../App.css'

const RedactForm = () => {

    const [tokenisedData, setTokenisedData] = useContext(Context);

    

    // console.log(tokenisedData.tokenisedData)

    // console.log(card_cvc)

    const handleClick = (event) => {
        event.preventDefault();
        const { card_number, card_exp, card_cvc } = tokenisedData.tokenisedData
        document.getElementById("cc-number").setAttribute('value', card_number);
        document.getElementById("cc-exp-date").setAttribute('value', card_exp);
        document.getElementById("cvc-code").setAttribute('value', card_cvc);
    }

    return (
            
            <form className="form">
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
