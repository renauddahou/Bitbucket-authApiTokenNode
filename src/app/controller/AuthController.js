const jwt = require('jsonwebtoken')
const http = require('../../core/http')
require('dotenv').config();
const AccessApiKey = require('../config/AccessApiKey');

const expireToken = process.env.TOKEN_LIFE;
const expireRefreshToken = process.env.REFRESH_TOKEN_LIFE;
const key = process.env.API_KEY;

module.exports = {
    getToken: async(req, res) => {
        try {
            let tokenList = {};
            const postData = req.body;
            const accessApi = AccessApiKey.generateTokenByOrigen(postData.apiKey);
            console.log(accessApi)
            if (accessApi) {


                const token = await jwt.sign({ accessApi }, process.env.SECRET_TOKEN, { expiresIn: expireToken })
                const refreshToken = await jwt.sign({ key }, process.env.SECRET_REFRESH_TOKEN, { expiresIn: expireRefreshToken })
                const response = {
                    "token": token,
                    "origen": accessApi.origen
                }
                tokenList[refreshToken] = response
                return http.ok(res, response, 200);
            } else {
                let error = {
                    "code": 403,
                    "message": "Acceso denegado."
                }
                return http.error(res, error, 403);
            }
        } catch (error) {
            http.error(res, error, 500);
        }
    },
    validateToken: async(req, res) => {
        try {
            const token = req.body.token || req.query.token || req.headers['x-access-token']
                // decode token
            if (token) {
                // verifies secret and checks exp
                jwt.verify(token, process.env.SECRET_TOKEN, function(err, decoded) {
                    if (err) {
                        response = {
                            message: (err.name === 'TokenExpiredError') ? 'El token a expirado' : err.message
                        }
                        http.error(res, response, 500)
                    } else {
                        response = {
                            "info": decoded,
                            message: 'Petición exitosa'
                        }
                    }
                });

                http.ok(res, response, 200);
            } else {
                // if there is no token
                // return an error
                return res.status(403).send(http.error({
                    "message": "Acceso denegado."
                }));
            }
        } catch (error) {
            http.error(res, error, 500)
        }
    }
}