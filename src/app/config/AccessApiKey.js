const jwt = require('jsonwebtoken')
require('dotenv').config();


module.exports = {
   generateTokenByOrigen: (key) => {
       let response;
       switch (key) {
           case process.env.API_KEY:
                response = {
                    key,
                    origen: "WEB"
                }
               break;
            default:
                response = null;
               break;
            
       }
       return response;
   }
}