import React, { useEffect, useState } from 'react';
import './collect-form-styles.css'

const CollectForm = () => {

    const [form, setForm] = useState({});
    const [isLoaded, scriptLoaded] = useState(false);

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
            });

            vgsForm.field('#cvc-code', {
                type: 'card-security-code',
                name: 'card_cvc',
                successColor: '#4F8A10',
                errorColor: '#D8000C',
                placeholder: 'CVC',
                maxLength: 3,
                validations: ['required', 'validCardSecurityCode'],
            });

            vgsForm.field('#cc-exp-date', {
                type: 'card-expiration-date',
                name: 'card_exp',
                successColor: '#4F8A10',
                errorColor: '#D8000C',
                placeholder: 'MM / YY',
                validations: ['required', 'validCardExpirationDate'],
            });
        }
    }, [isLoaded]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        form.submit(
            '/data',
            {},
            (status, response) => {
                console.log(status, response);
            },
            (error) => {
                console.log(error);
            }
        )

    }

    return (
            
            <form onSubmit={handleFormSubmit} className="form">
                <div id="cc-number" className="form-field"></div>
                <div className="form-field-group">
                    <div id="cc-exp-date" className="form-field"></div>
                    <div id="cvc-code" className="form-field"></div>
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>

    )
}

export default CollectForm
