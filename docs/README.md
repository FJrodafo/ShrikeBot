# ShrikeBot

A ShrikeBot clone made in JavaScript!

[![GitHub Pages](https://img.shields.io/badge/%20-FFFFFF?style=social&logo=githubpages&logoColor=black&logoSize=auto)](https://fjrodafo.github.io/ShrikeBot/)
[![GitHub Stars](https://img.shields.io/github/stars/FJrodafo/ShrikeBot?style=social&logo=github&logoColor=black&label=Stars&labelColor=FFFFFF&color=FFFFFF)](https://github.com/FJrodafo/ShrikeBot/stargazers)

[![Docker Container](https://img.shields.io/badge/ShrikeBot-2560FF?style=flat&logo=docker&logoColor=FFFFFF)](https://github.com/FJrodafo/ShrikeBot/pkgs/container/shrike-bot)
[![Docker Pulls](https://img.shields.io/docker/pulls/fjrodafo/shrike-bot?style=flat&logo=docker&logoColor=FFFFFF&label=Pulls&labelColor=2560FF&color=2560FF)](https://hub.docker.com/r/fjrodafo/shrike-bot)
[![Docker Image Size](https://img.shields.io/docker/image-size/fjrodafo/shrike-bot?style=flat&logo=docker&logoColor=FFFFFF&label=Size&labelColor=2560FF&color=2560FF)](https://hub.docker.com/r/fjrodafo/shrike-bot)

[![npm](https://img.shields.io/badge/ShrikeBot-CD0000?style=flat&logo=npm&logoColor=FFFFFF)](https://github.com/FJrodafo/ShrikeBot/pkgs/npm/shrike-bot)
[![npm Downloads](https://img.shields.io/npm/d18m/@fjrodafo/shrike-bot?style=flat&logo=npm&logoColor=FFFFFF&label=Downloads&labelColor=CD0000&color=CD0000)](https://www.npmjs.com/package/@fjrodafo/shrike-bot)
[![npm Unpacked Size](https://img.shields.io/npm/unpacked-size/@fjrodafo/shrike-bot?style=flat&logo=npm&logoColor=FFFFFF&label=Size&labelColor=CD0000&color=CD0000)](https://www.npmjs.com/package/@fjrodafo/shrike-bot)

[![Discord](https://img.shields.io/discord/1333530700917375027?style=flat&logo=discord&logoColor=ffffff&label=&color=5865F2)](https://discord.gg/DXP43ZEwac)

## Index

1. [Introduction](#introduction)
2. [Project structure](#project-structure)
3. [Clone the repository](#clone-the-repository)
4. [Set up the project](#set-up-the-project)
5. [Install dependencies](#install-dependencies)
6. [Final steps](#final-steps)
7. [Using Docker](#using-docker)
8. [Available Scripts](#available-scripts)
9. [Additional information](#additional-information)
10. [Resources](#resources)
11. [Credits](#credits)

## Introduction

A simple ShrikeBot clone made in JavaScript!

This project has been developed on a [Linux](https://github.com/torvalds/linux) system. To learn more about the system, visit the [Dotfiles](https://github.com/FJrodafo/Dotfiles) repository.

## Project structure

```
/
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
├── docs/
|   └── *.md
├── src/
│   ├── assets/
│   │   ├── backup/
│   │   │   └── ...
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
├── CONTRIBUTING
├── LICENSE
├── .dockerignore
├── .npmignore
├── .npmrc
├── docker-compose.yaml
├── Dockerfile
├── eslint.config.js
├── package-lock.json
└── package.json
```

## Clone the repository

Open a terminal in the directory where you store your repositories and clone it with the following command:

```shell
# HTTPS
git clone https://github.com/FJrodafo/ShrikeBot.git
cd ShrikeBot/
```

```shell
# SSH
git clone git@github.com:FJrodafo/ShrikeBot.git
cd ShrikeBot/
```

## Set up the project

This project needs a `config.json` into the `src/` directory with some data related to your Discord server and your APP token (Make sure you have an APP created in the [Discord Developer Portal](https://discord.com/developers/applications)):

```shell
cp src/config.example.json src/config.json
nano src/config.json
```

## Install dependencies

This project must be initialized and the necessary dependencies installed with the following command:

```shell
npm i
```

## Final steps

If you have the `config.json` file into the `src/` directory correctly configured and Node v24.x installed on your machine, then you are good to go!

To check if you already have Node installed on your machine, run `node -v` in your terminal. Otherwise, you will need to install Node v24.x or higher or, as a last option, check out the [Docker](#using-docker) alternative.

Finally, if you have Node installed, run the following command to activate ShrikeBot:

```shell
npm start
# Press 'Ctrl + C' to exit
```

Open Discord and access the server where ShrikeBot is located to see the result.

## Using Docker

You can find a Docker image of this project ready to be pulled on [GitHub Packages](https://github.com/FJrodafo/ShrikeBot/pkgs/container/shrike-bot) or [Docker Hub](https://hub.docker.com/r/fjrodafo/shrike-bot) official website!

Pull the latest image with the following commands:

```shell
# GitHub Packages
docker pull ghcr.io/fjrodafo/shrike-bot:latest
```

```shell
# Docker Hub
docker pull fjrodafo/shrike-bot:latest
```

> [!IMPORTANT]
> 
> Please note that when using Docker, port 3000 on localhost will be occupied by ShrikeBot for its proper functioning.
> 
> If you already have applications that use port 3000, don't worry, the dashboard uses the [@fjrodafo/port-finder](https://github.com/FJrodafo/PortFinder) library, which will always search for a free port to run the application without any problems.

### Run with Docker Compose (Recommended)

Make sure to create the `config.json` file into the `src/` directory before continuing (This file is used only at runtime, is ignored by Git and Docker, and is not included in the image).

Build the container:

```shell
docker compose build
```

> [!NOTE]
> 
> If you want to build the image locally, uncomment the `build` section in `docker-compose.yaml` and run `docker compose build`. Otherwise, skip directly to the next step.

Run the container:

```shell
docker compose up -d
```

Check the container logs:

```shell
docker logs -f shrike-bot
```

Stop the Container:

```shell
docker compose down
```

### Build Docker image manually

If you prefer not to use Docker Compose, you can build and run the image manually.

If you don't have Node v24.x or higher installed on your machine, you can build a Docker image by running the [Dockerfile](https://github.com/FJrodafo/ShrikeBot/blob/main/Dockerfile) (Make sure to create and configure the `config.json` file correctly into the `src/` directory before building the docker image).

Open a terminal and run the following command:

```shell
docker build -t shrike-bot:latest .
```

After the build completes, run the image inside a container with the following command:

```shell
docker run -dp 127.0.0.1:3000:3000 \
  -v $(pwd)/src/config.json:/app/src/config.json:ro \
  shrike-bot:latest
```

Check the container logs:

```shell
docker ps -a
docker logs -f <container_id>
```

Stop and remove the Container:

```shell
docker stop <container_id>
docker rm <container_id>
```

### Build & Push (Ignore this subsection)

```shell
docker build \
  -t ghcr.io/fjrodafo/shrike-bot:1 \
  -t ghcr.io/fjrodafo/shrike-bot:1.0 \
  -t ghcr.io/fjrodafo/shrike-bot:1.0.0 \
  -t ghcr.io/fjrodafo/shrike-bot:latest \
  -t fjrodafo/shrike-bot:1.0.0 \
  -t fjrodafo/shrike-bot:latest \
  .

docker push ghcr.io/fjrodafo/shrike-bot:1
docker push ghcr.io/fjrodafo/shrike-bot:1.0
docker push ghcr.io/fjrodafo/shrike-bot:1.0.0
docker push ghcr.io/fjrodafo/shrike-bot:latest
docker push fjrodafo/shrike-bot:1.0.0
docker push fjrodafo/shrike-bot:latest
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Once configured, run the APP. It first deploy the commands, updating both on the guild server and globally (You can edit the commented lines of code in the [deploy-commands.js](./src/deploy-commands.js) file to customize the deploy of the APP commands).

### `npm run canary`

Once configured, run a Canary version of the APP. It works exactly the same as the main APP. This version is intended to test new commands and experimental implementations to ensure they work before publishing changes, preventing any bugs that may cause malfunctions.

### `npm run eslint`

Runs the eslint to find possible formatting errors in the code.

### `npm run eslintfix`

Automatically fixes all errors caught by eslint.

### `npm test`

There are currently no tests configured.

### `npm run tarball`

Simulates packaging a project into a `.tgz` archive (as if preparing it for distribution) without actually generating the file.

## Additional information

If you want to see an example project built by following the [Discordjs guide](https://discordjs.guide/), check out the [DiscordAPP](https://github.com/FJrodafo/DiscordAPP) repository.

## Resources

[Discordjs](https://discord.js.org/)
·
[Docs](https://discord.js.org/docs)
·
[Guide](https://discordjs.guide/)
·
[GitHub](https://github.com/discordjs/discord.js)

## Credits

Thanks to the [Discordjs](https://discord.js.org/) team for creating an amazing library and making Discord APP development easier!

Thanks to [Syraleaf](https://github.com/Syraleaf) for sharing the [commands.pdf](https://github.com/FJrodafo/ShrikeBot/blob/main/App/src/assets/commands.pdf) file with a list of each and every command from the original ShrikeBot.
