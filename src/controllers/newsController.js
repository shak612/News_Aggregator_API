const { getNewsService } = require("../services/newsServices/getNewsService");


exports.getNewsController = (req, res) => {
    getNewsService(req.user, req.message).then((response) => {
        if (!response.status) {
            throw new Error(response.message);
        }
        res.status(200).json({
            status: response.status,
            response: response.data
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(401).json({
            status: false,
            message: err.message
        })
    })     
}