'use strict';
const timeCalc = require('./timeCalc');

module.exports.process = function process(intentData, cb) {

    if (intentData.intent[0].value !== 'time') {
        cb(new Error(`Expected time intent, got ${intentData.intent[0].value}`));
        return;
    }
    if (!intentData.location[0]) {
        cb(new Error('Missing location in time intent'));
        return;
    }
    console.log(intentData.intent[0].value + intentData.location[0]);
    timeCalc.getTimeString(intentData.location[0].value, (err, res) => {
        cb(err, res);
        return;
    });
}