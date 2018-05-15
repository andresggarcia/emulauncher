#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');
const avd = require('./lib/avd');
const CLI = require('clui')
const Spinner = CLI.Spinner;

clear();
console.log('\n',
  chalk.hex('#64ffda').bold(
    figlet.textSync('emulauncher', { font: 'doom' })
  )
);

const run = async () => {
  const searching = new Spinner('Buscando AVD\'s...');
  searching.start();
  const emuList = await avd.listAvds();
  searching.stop();
  const emu = await inquirer.chooseEmulator(emuList);
  /* User Selects... */
  avd.runAvd(emu.choose);
};

if (process.env.ANDROID_HOME) {
  if (fs.existsSync(`${process.env.ANDROID_HOME}/tools/emulator`)) {
    run();
  } else {
    console.log(chalk.hex('#FF4136').bold('Android tools no está instalado correctamente'));
  }
} else {
  console.log(chalk.hex('#FF4136').bold('Necesitas definir el path de Android Tools en la variable $ANDROID_HOME'));
};
