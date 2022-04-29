'use strict' //backend always
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
    jwksUri: process.env.JWKS_URI
});

function getKey(header, callback){
    client.getSigningKey(header.kid, function(error, key){
        var getSigningKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}


function authUser(request, errorFirstOrUserCallbackFunction){
    try{
        const token = request.headers.authorization.split(' ')[1];
        jwt.verify(token, getKey, {}, errorFirstOrUserCallbackFunction);
    }
    catch(error){errorFirstOrUserCallbackFunction('NOT ALLOWED');}
}


module.exports = authUser;