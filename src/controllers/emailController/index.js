const sendEmail = require("../../sendEmail");
const { validateData, setReponse } = require("../../utils");

const send_email = (req, res) => {
    const validate = validateData(req.body);
    if(validate.status === 'ok'){
        const { body = {} } = req
        sendEmail(body).then(resolve => {
            res.status(200).json(setReponse(1, "success", 200));
        }).catch(err => {
            res.status(502).json(setReponse(0, "unable to send email", 502, {error: err}));
        })
    }else{
        res.status(401).json(setReponse(0, "invalid request", 401));
    }  
}

module.exports = {
    send_email
}