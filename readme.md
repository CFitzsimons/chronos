Contribution
============


Contribution should be pretty straight forward, follow these steps:

1. Create a folder inside /modules/ for your code.
2. Create a function inside an index.js file that takes a discord message event as a parameter.
3. Have your module handle that event however you need it to.
4. Submit a pull request, once it's in the master branch of the project the server will automatically redeploy with your new module!


So you should have a file like this:

    modules/awesomeModuleIdea/index.js

index.js file:

```
module.exports = (message) => {

}
```

You can have any number of other files inside of your /awesomeModuleIdea/ folder as long as you have the main function above in your index.js.


What does the ```message``` object actually contain?
----------------------------------------------------

It's the message object from this project: https://discord.js.org/#/docs/main/stable/class/Message

You can access the information in the message via ```message.content``` and you can send a message back using ```message.reply('your message here')```.  There's a heap of other functionality inside the object and it's all documented well in the discord.js project.  

You probably want to make sure you filter out messages that aren't relevent or your module will just reply to everything.  A modified simple example from discord.js:

index.js:
```
module.exports = (message) => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
}

```
