import 'dotenv/config';

import path from 'node:path';

import { CommandKit } from 'commandkit';
import { Client } from 'discord.js';

import env from './utils/env';
import logger from './utils/logger';

const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent'],
  presence: {
    status: 'dnd',
    afk: false,
    activities: [
      {
        name: 'Evilbot 4.0.0',
        state: 'Дивиться за сервером',
        type: 3,
      },
    ],
  },
});

client.on('ready', (c) => {
  logger.info(`Logged in as ${c.user.username}!`);
});

client.on('error', (e) => {
  logger.error(e.message);
});
new CommandKit({
  client,
  commandsPath: path.join(__dirname, 'commands'),
  eventsPath: path.join(__dirname, 'events'),
  validationsPath: path.join(__dirname, 'validations'),
  devGuildIds: ['772498978087501835'],
  devUserIds: ['427227107077390337'],
  devRoleIds: [],
  skipBuiltInValidations: true,
  bulkRegister: true,
});

client.login(env.DISCORD_TOKEN);
