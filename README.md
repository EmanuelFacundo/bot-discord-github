<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Bot Discord Github" />

  &#xa0;

  <!-- <a href="https://botdiscordgithub.netlify.app">Demo</a> -->
</div>

<h1 align="center">Bot Discord + Github</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/EmanuelFacundo/bot-discord-github?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/EmanuelFacundo/bot-discord-github?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EmanuelFacundo/bot-discord-github?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/EmanuelFacundo/bot-discord-github?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/EmanuelFacundo/bot-discord-github?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/EmanuelFacundo/bot-discord-github?color=56BEB8" /> -->

  <img alt="Github stars" src="https://img.shields.io/github/stars/EmanuelFacundo/bot-discord-github?color=56BEB8" />
</p>

<!-- Status -->

<h4 align="center"> 
	🚧  Bot Discord + Github 🚀 Under construction...  🚧
</h4> 

<hr> 

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

This is a bot to do a little integration between github and a discord server, the bot needs to be added to a webhook of your repository.
Messages are sent according to the webhook action, depending on the type of action in which the message is sent in the specified channel and to the users involved in the PR

## :sparkles: Features ##

:heavy_check_mark: Message open/close of pull requests;\
:heavy_check_mark: Send messages private to reviewers/assignees ;\
:heavy_check_mark: Send messages private to assignees in status approved/changes_requested/comments ;
<!-- :heavy_check_mark: Feature 3; -->

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Discord.js](https://discord.js.org/#/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :seedling: Example .env

```.env
TOKEN_BOT = "BOT_DISCORD_TOKEN"
CHANNEL_ID = "CHANNEL_ID_OF_SERVER"
```

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/EmanuelFacundo/bot-discord-github

# Access
$ cd bot-discord-github

# Install dependencies
$ npm i

# Run the project
$ npm start

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/EmanuelFacundo" target="_blank">Emanuel Facundo</a>

&#xa0;

<a href="#top">Back to top</a>
