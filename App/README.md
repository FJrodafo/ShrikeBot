# ShrikeBot

A ShrikeBot clone made in JavaScript!

[![Discord](https://img.shields.io/discord/1333530700917375027?style=flat&logo=discord&logoColor=ffffff&label=&color=5865F2)](https://discord.gg/DXP43ZEwac)
[![GitHub Stars](https://img.shields.io/github/stars/FJrodafo/ShrikeBot?style=social&logo=github&logoColor=000000&label=Stars&labelColor=ffffff&color=ffffff)](https://github.com/FJrodafo/ShrikeBot/stargazers)

## Index

1. [Attribution](#attribution)
2. [Project Structure](#project-structure)
3. [Download the code](#download-the-code)
4. [Set up the project](#set-up-the-project)
5. [Install dependencies](#install-dependencies)
6. [Final steps](#final-steps)
7. [Using Docker](#using-docker)
8. [Available Scripts](#available-scripts)
9. [Credits](#credits)

## Attribution

This project was build by following the [Discordjs guide](https://discordjs.guide/). Thanks to the [Discordjs](https://discord.js.org/) team for creating an amazing library and making Discord APP development easier!

## Project Structure

<details>
<summary>Click me</summary>

```
App/
├── dashboard/
│   ├── public/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   ├── routes/
│   │   ├── api.js
│   │   ├── logs.js
│   │   └── metrics.js
│   ├── utils/
│   │   ├── format.js
│   │   └── logs.js
│   └── index.js
├── node_modules/
│   └── ...
├── src/
│   ├── assets/
│   │   └── commands.pdf
│   ├── commands/
│   │   └── */
│   │       └── *.js
│   ├── events/
│   │   ├── interactionCreate.js
│   │   ├── messageCreate.js
│   │   └── ready.js
│   ├── utils/
│   │   └── emoji.js
│   ├── config.json
│   ├── deploy-commands.js
│   └── index.js
├── docker-compose.yaml
├── Dockerfile
├── eslint.config.js
├── package-lock.json
└── package.json
```
</details>

## Download the code

Open your directory where you save your repositories and clone it with the following command:

```shell
# From GitHub
git clone https://github.com/FJrodafo/ShrikeBot.git
```

## Set up the project

This project needs a `config.json` into the `src` directory with some data related to your Discord server and your APP token (Make sure you have an APP created in the [Discord Developer Portal](https://discord.com/developers/applications)):

```json
{
    "guildId": "",
    "clientId": "",
    "token": ""
}
```

## Install dependencies

As well, this project must be initialized and the necessary dependencies installed with the following command (Make sure you are in the `App` directory):

```shell
npm install
```

## Final steps

If you have the `config.json` file into the `src` directory correctly configurated and Node v22.14.0 installed on your machine, then you are good to go!

To check if you already have Node installed on your machine, run `node -v` in your terminal. Otherwise, you will need to install Node v22.14.0 or, as a last option, check out the [Docker](#using-docker) alternative.

Finally, if you have Node installed, run the following command to activate your Discord APP (Make sure you are in the `App` directory):

```shell
npm start
# Press 'Ctrl + C' to exit
```

Open Discord and access the server where your Discord APP is located to see the result.

## Using Docker

### Run with Docker Compose

Make sure to create and configurate the `config.json` file correctly into the `src` directory before running Docker commands...

Build the container (Make sure you are in the `App` directory):

```shell
docker compose build
```

Run the container:

```shell
docker compose up -d
```

Stop the Container:

```shell
docker compose down
```

### Build Docker image on your own

If you don't have Node v22.14.0 installed on your machine, you can build a Docker image by running the [Dockerfile](./Dockerfile) (Make sure to create and configurate the `config.json` file correctly into the `src` directory before building the docker image).

Open a terminal and run the following command (Make sure you are in the `App` directory):

```shell
docker build -t shrike-bot .
```

After the build completes, you can run your container with the following command:

```shell
docker run -dp 127.0.0.1:3000:3000 shrike-bot
```

Get the container ID:

```shell
docker ps -a
```

Stop the container:

```shell
docker stop <container-id>
```

Delete the container:

```shell
docker rm <container-id>
```

> [!IMPORTANT]
> 
> Please note that when using Docker, port 3000 on localhost will be occupied by the Discord application for its proper functioning.
> 
> If you already have applications that use port 3000, you will need to adjust certain parameters before creating the Docker container so that it can run correctly on a free port.

## Available Scripts

In the project directory, you can run:

### `npm start`

Once configured, run the APP. It first deploy the commands, updating both on the guild server and globally (You can edit the commented lines of code in the [deploy-commands.js](./src/deploy-commands.js) file to customize the deploy of the APP commands).

### `npm run eslint`

Runs the eslint to find possible formatting errors in the code.

### `npm run eslintfix`

Automatically fixes all errors caught by eslint.

### `npm test`

There are currently no tests configured.

## Credits

Thanks to [Syraleaf](https://github.com/Syraleaf) for sharing the [commands.pdf](https://github.com/FJrodafo/ShrikeBot/blob/main/App/src/assets/commands.pdf) file with a list of each and every command for the original ShrikeBot.