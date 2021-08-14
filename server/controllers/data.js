export const getData = (req, res) => {
    
    const confidentialData = req.body;

    try {

        console.log(confidentialData)

    } catch (error) {

        res.status(409).json({ message: error.message})

    }

}