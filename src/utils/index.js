require('dotenv').config();

const validateData = (post) => {
    if(post !== undefined && post !== null){
        const  { to, from, html, text, secret_key} = post;
        if(!secret_key) return setReponse(0, "unauthorized request", 401)
        if(secret_key !== process.env.API_KEY) return setReponse(0, "unauthorized request", 401)
        else if(!to) return setReponse(0, "email to is required", 400) 
        else if(!from) return setReponse(0, "email from is required", 400) 
        else if(!html && !text) return setReponse(0, "no email body", 400) 
        else return setReponse(1)
    }
    else{
        return setReponse(0, "invalid request...", 400)
    }
}

const setReponse = (status, msg='', statusCode=200, ...rest) => {
    const response = {
        status: status === 1 ? 'ok' : 'error',
        message: msg,
        statusCode,
        ...rest
    }
    console.log(response);
    return response
}

module.exports = {
    setReponse,
    validateData
};