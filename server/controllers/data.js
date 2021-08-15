import fs from 'fs';
import axios from 'axios';
import tunnel from 'tunnel';

export const getData = (req, res) => {

    const tokenisedData = req.body;

    // console.log(tokenisedData)

    try {

        res.status(200).json({ tokenisedData: tokenisedData });


    } catch (error) {

        res.status(409).json({ message: error.message })

    }

}

export const revealData = async (req, res) => {

    console.log(req.body.tokenisedData)
    // console.log(process.env.VGS_PEM)
    // const pem = process.env.VGS_PEM.replace(/\\n/g, '\n');
    // console.log(pem)

    const tunnelingAgent = tunnel.httpsOverHttp({
        ca: [fs.readFileSync('./key.pem')],
        proxy: {
            host: process.env.VGS_OUTBOUND_PROXY,
            port: 8080,
            proxyAuth: process.env.VGS_PROXY_AUTH
        }
    });

    const redactedPayload = req.body.tokenisedData;

    try {

        return await axios.post(
            'https://echo.apps.verygood.systems/post',
            JSON.stringify(redactedPayload),
            {
                httpsAgent: tunnelingAgent,
                proxy: false,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log('\nResponse from Axios request on REVEAL:');
                console.log(response.data.json);
                // return r.data;
            });

        // res.status(200).send('WORKED');


    } catch (error) {

        res.status(409).json({ message: error.message })

    }

}