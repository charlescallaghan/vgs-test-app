export const getData = (req, res) => {
    
    const confidentialData = req.body;

    console.log('working');

    try {

        console.log(confidentialData)

        res.status(200).send('DATA RECEIVED');
        

    } catch (error) {

        res.status(409).json({ message: error.message})

    }

}