'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: '#adaac5'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Luis Ingaruca'),
  handle: chalk.white('lingarucadev'),
  work: chalk.white('Java Developer at Everis'),
  opensource: chalk.white('Node.js Community Committee ') + chalk.green('⬢'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~lingarucadev'),
  github: chalk.gray('https://github.com/') + chalk.green('ingaruka'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('ingaruca'),
  npx: chalk.red('npx') + ' ' + chalk.white('lingarucadev'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               opensourcing + newline + newline + // data.labelOpenSource + data.opensource
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + newline + // data.labelLinkedIn + data.linkedin
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
