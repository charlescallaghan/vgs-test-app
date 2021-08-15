export const getData = (req, res) => {
    
    const tokenisedData = req.body;

    // console.log(tokenisedData)

    try {

        res.status(200).json({ tokenisedData: tokenisedData });
        

    } catch (error) {

        res.status(409).json({ message: error.message})

    }

}

export const redactData = (req, res) => {
    
    console.log(req.body.tokenisedData)

    try {

        res.status(200).send('WORKED');
        

    } catch (error) {

        res.status(409).json({ message: error.message})

    }

}