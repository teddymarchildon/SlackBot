'use strict';
const timeCalc = require('./timeCalc');

module.exports.process = function process(intentData, cb) {

    if(intentData.intent[0].value !== 'time')
        return cb(new Error(`Expected time intent, got ${intentData.intent[0].value}`));

    if(!intentData.location) return cb(new Errors('Missing location in time intent'));

    timeCalc.getTimeString(intentData.location[0].value, (res) => {
        return cb(false, res);
    });
}