const ok = (res, data, code = 200) => {
    let response = {};
    response = {
        error: false,
        data
    }
    return res.status(code).json(response);
}

const error = (res, error, code = 500) => {
    let response = {};

    response = {
        error: true,
        data: {
            code: error.code || '',
            message: error.message || '',
        },
    }
    
    return res.status(code).json(response);
}

module.exports = {
    ok,
    error
}