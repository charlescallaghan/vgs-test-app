import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../Store'
import '../App.css'
import css from '../iFrame'

const CollectForm = () => {

    const [form, setForm] = useState({});
    const [isLoaded, scriptLoaded] = useState(false);
    const [tokenisedData, setTokenisedData] = useContext(Context);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = 'https://js.verygoodvault.com/vgs-collect/2.9.0/vgs-collect.js';
        script.async = true;
        script.onload = () => scriptLoaded(true);
        document.body.appendChild(script);
    });

    useEffect(() => {
        if (isLoaded) {
            const vgsForm = window.VGSCollect.create('tntomnhqfaj', 'SANDBOX', (state) => {
            });
            setForm(vgsForm);

            vgsForm.field('#cc-number', {
                type: 'card-number',
                name: 'card_number',
                successColor: '#4F8A10',
                errorColor: '#D8000C',
                placeholder: 'Card number',
                showCardIcon: true,
                validations: ['required', 'validCardNumber'],
                css
            });

            vgsForm.field('#cvc-code', {
                type: 'card-security-code',
                name: 'card_cvc',
                successColor: '#4F8A10',
                errorColor: '#D8000C',
                placeholder: 'CVC',
                maxLength: 3,
                validations: ['required', 'validCardSecurityCode'],
                css
            });

            vgsForm.field('#cc-exp-date', {
                type: 'card-expiration-date',
                name: 'card_exp',
                successColor: '#4F8A10',
                errorColor: '#D8000C',
                placeholder: 'MM / YY',
                validations: ['required', 'validCardExpirationDate'],
                css
            });
        }
    }, [isLoaded]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        form.submit(
            '/data',
            {},
            (status, response) => {
                setTokenisedData(response)
                alert('Payment info received! Check and reveal your aliased details on the next page...')
            },
            (error) => {
                console.log(error);
            }
        )
    }

    return (

        <>
        <form id="collect-form" onSubmit={handleFormSubmit}>
          <div className="group">
            <label>
              <span>Card number</span>
              <div id="cc-number" className="field" />
            </label>
            <label>
              <span>Expiry date</span>
              <div id="cc-exp-date" className="field" />
            </label>
            <label>
              <span>CVC</span>
              <div id="cvc-code" className="field" />
            </label>
          </div>
          <button type="submit" onClick={handleFormSubmit}>
            Submit payment
          </button>
        </form>
      </>
    )
}

export default CollectForm
