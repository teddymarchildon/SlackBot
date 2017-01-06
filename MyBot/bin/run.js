'use strict';
const service = require('../server/service');
const http = require('http');
const server = http.createServer(service);
const tokens = require("../token");
const slackClient = require('../server/slackclient');
const witClient = require("../server/witclient")(tokens.witToken);
const slackLogLevel = 'verbose';

const rtm = new slackClient(tokens.slackToken, slackLogLevel, witClient);
rtm.start();

slackClient.addAuthenticatedHandler(rtm, function() {
    server.listen(3000);
});

server.on('listening', function() {
    console.log(`bot is listening on ${server.address().port} in ${service.get('env')} mode.`);
});