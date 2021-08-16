# 🔒 VGS Test App 🔒


## What this project is about

This is an application testing some functionalities of [Very Good Security](https://www.verygoodsecurity.com/). It allows the user to enter secure information which will then be tokenised by VGS and then reveal the original tokenised information back to the user.

<img src='https://github.com/charlescallaghan/the-vampyre-king/blob/master/VGS%20Test%20App.gif?raw=true' alt='VGS Test App Screenshot'/>

## Installation

- Download or make a clone of this repository.
- Access the client folder and the server folder from your terminal and run ```npm install``` in each one.
- In the server folder create a ```.env``` file and add ```VGS_OUTBOUND_PROXY```, ```VGS_PROXY_AUTH (<username>:<password>```, and ```VGS_VAULT_ID```. Also add the SANDBOX ```key.pem``` file to the server folder.
- In the client folder, update the ```ngrokURL``` variable on line 8 with your relevant ngrok tunnel address.
- Access the client folder and the server folder from your terminal and run ```npm start``` in each one.

## Usage
1. Enter sensitive data on the Collect Form page
2. Click the Fill In Aliased Data Button
3. Click the Reveal Button
