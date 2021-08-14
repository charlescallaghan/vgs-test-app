import React from 'react'

class CollectForm extends React.Component {

    handleFormSubmit = (event) => {
        const cardNumber = event.target.cardNumber.value;
        const expDate = event.target.expDate.value;
        const cvv = event.target.cvv.value;

        event.preventDefault();
        console.log('Card Number : ' + cardNumber)
        console.log('Exp. Date : ' + expDate)
        console.log('CVV : ' + cvv)
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
