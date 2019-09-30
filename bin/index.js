#!/usr/bin/env node

const app = require('../dist/index');
const program = require('commander');
const fs = require('fs');
const log = require('great-logs');

const APP_FOLDER = `${__dirname}/..`;
const PACKAGE_INFO = JSON.parse(fs.readFileSync(`${APP_FOLDER}/package.json`));

program
  .version(PACKAGE_INFO.version)
  .command('create <name> <contact_email>')
  .action(async (name, contactEmail) => {
    const block = new app.ServerBlock(name, contactEmail);
    block.create();
  });

program.parse(process.argv);
