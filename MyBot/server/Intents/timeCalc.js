'use strict';
const request = require('superagent');
const moment = require('moment');
const tokens = require("../../token");
function getTimeString(location, cb) {
    var timeString = "Error ha ha ";
    request.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + tokens.geocode, (err, response) => {
        if (err) {
            console.log(err);
            cb(err, timeString);
            return;
        } else {
            try {
                const location = response.body.results[0].geometry.location;
                const timestamp = +moment().format('X');
                request.get('https://maps.googleapis.com/maps/api/timezone/json?location=' + location.lat + ',' + location.lng + '&timestamp=' + timestamp + '&key=' + tokens.timecode, (err, response) => {
                    if (err) {
                        cb(err, timeString);
                        return;
                    } else {
                        const result = response.body;
                        timeString = moment.unix(timestamp + result.dstOffset + result.rawOffset).utc().format('dddd, MMMM Do YYYY, h:mm:ss a');
                        cb(null, timeString);
                        return;
                    }
                });
            } catch (err) {
                cb(new Error("Could not process location"), timeString);
                return;
            }

        }
    });
}
module.exports.getTimeString = getTimeString;