import React from 'react'
import axios from 'axios'

class CollectForm extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
        const cardNumber = event.target.cardNumber.value;
        const expDate = event.target.expDate.value;
        const cvv = event.target.cvv.value;
        const userData = {cardNumber, expDate, cvv}

        console.log(cardNumber, expDate, cvv)
        axios.post('http://localhost:3001/data/', userData).then((res) => console.log(res));

    }

    render() {
        return (
            <div className='form-wrapper'>
                <form onSubmit={this.handleFormSubmit}>
                    <fieldset>
                        <label>
                            <p>Card Number</p>
                            <input name="cardNumber" />
                        </label>
                        <label>
                            <p>Exp. Date</p>
                            <input name="expDate" />
                        </label>
                        <label>
                            <p>Security Code (CVV)</p>
                            <input name="cvv" />
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CollectForm
