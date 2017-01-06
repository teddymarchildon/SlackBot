# SlackBot
### An interactive, open source chat bot using the Slack API and Node.js

 * The bot comes equipped with a time intent, meaning it will tell you the time when you ask it what the time is in a given location.
 
To get started, clone the repository. Navigate to the directory using the command line and run 'npm install' to install the dependecies
found in the package.json file. 

Next, create a new Slack team, and follow the Slack API documentation for adding a bot.

You then will have to create a new bot on Wit.ai, and give it a couple time questions. Add new intents with the word time in it.

Next, you will need 4 API tokens, one from Slack, one from Wit.ai, one from Google Maps Geocoding, and one from Google Maps Timezone. 
Navigating to these sites and exploring the API links will give you good directions on how to get these keys. Store these tokens 
in a token.json file (or however you like, but be able to identify where I use my tokens and replace them with yours). 

After that, if you successfully create the API tokens and put them in the correct places in the files, you should be good to go!
Run 'node bin/run' and see the server load, then navigate back to your slack team and ask the bot any time questions you want.

#Extending Intents

To extend the number of intents, you first must train your bot to accept these intents. Next, create a new intent handler file
in the Intents folder, and add whatever helper modules are useful for handling that intent. The slackClient will find the correct
intent handler if you name it correctly. 

Enjoy!

