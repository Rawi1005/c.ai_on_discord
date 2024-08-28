# Character AI On Discord

> Node.js client for the unofficial [Character AI API](https://character.ai/), an adapted code from https://github.com/realcoloride/node_characterai that's useful in discord

## Intro

This repository is inspired by [RichardDorian's unofficial node API](https://github.com/RichardDorian/node-character.ai/) and [realcoloride node character ai](https://github.com/realcoloride/node_characterai).
Though, I found it might be useful if it's useable in discord bot so i made it in javascript.

**This project is not affiliated with Character AI in any way! It is a community project.**
The purpose of this project is to bring and build projects powered by Character AI.

If you like this project, please check their [website](https://character.ai/).

## Features

* 👍 Fully written in Javascript and CommonJS (for max compatibility and ease of use)
* ⌚ Asynchronous requests
* 🗣️ Use conversations on Discord
* 🧸 Easy to use
* 🔁 don't need to wait for a que
* 👤 Guest & token login support

## Requirements
``` nodejs```
## Installation

```bash
npm install 
```
## Configuration
Change this to [Discord Bot Token](https://discord.com/developers/applications)
```bash
client.login('YOUR_BOT_TOKEN_HERE');
```
if you wish to login you need to **Comment**
```bash
 await characterAI.authenticateAsGuest();
 ```
 Then use authenticateWithToken Instead

```bash
authenticateWithToken('YOURAPIKEYHERE');
 ```
Characters Configuration
Go to your prefered character copy the url you'll get
```
https://old.character.ai/chat2?char=4WOVrCApi4JYwfYwU2e5eDeFalLOkGBw6IfUZPX1XVQ

```
use only
```
4WOVrCApi4JYwfYwU2e5eDeFalLOkGBw6IfUZPX1XVQ
```
## Run command RUN BOTH FILE
```bash
node api.js
node index.js
```

anyways feels free to read for more information at https://github.com/realcoloride/node_characterai/blob/main/README.md

## Some Usages
<img width="637" alt="image" src="https://github.com/user-attachments/assets/89e36583-3965-4573-93c7-b390ca8807f6">
