'use strict';
const request = require('superagent');

function handleWitResponse(responseBody) {
    return responseBody.entities;
}

module.exports = function witClient(token) {
    const ask = function(message, callback) {
        console.log('ask: ' + message);
        request.get('https://api.wit.ai/message').set('Authorization', 'Bearer ' + token).query({v: '20170105'}).query({q: message}).end( (err, response) => {
            if (err) {
                return callback(err);
            } else if (response.statusCode != 200) {
                return callback(`Expected response code of 200, got ${response.statusCode}`);
            } else {
                const witResponse = handleWitResponse(response.body);
                return callback(null, witResponse);
            }
        });
    }
    return {
        ask: ask
    }
}