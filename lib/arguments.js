import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import utils from 'node-package-utilities'

export const packageName = 'del'

export const config = await utils.value.fromConfig(packageName)

const argv = yargs(hideBin(process.argv))
  .config(config || {})
  .option('base', {
    alias: 'b',
    description: 'Base Directory',
    demandOption: true
  })
  .option('src', {
    alias: 's',
    description: 'Source Directory',
    demandOption: true
  })
  .option('dest', {
    alias: 'd',
    description: 'Dest Directory',
    // default: ''
    demandOption: false
  })
  .option('ext', {
    alias: 'e',
    description: 'Target Extention',
    // default: ''
    demandOption: false
  })
  .option('ignore', {
    alias: 'ig',
    description: 'Ignore Directory',
    default: '**/_*',
    demandOption: false
  })
  .option('force', {
    alias: 'f',
    description: 'Allow deleting the current working directory and outside',
    default: true,
    type: 'boolean'
  })
  .option('dryRun', {
    alias: 'dry',
    description: 'List what would be deleted instead of deleting',
    default: false,
    type: 'boolean'
  })
  .argv

export default argv
