#!/usr/bin/env node --experimental-specifier-resolution=node
import { Command } from 'commander'
import { checklist, editLocations, getLocationReport } from './commands'
import clear from 'clear'
import { logger } from './utils'
import figlet from 'figlet'

clear()
logger.title(figlet.textSync('Photography'))

const cli = new Command()
cli.description('The Photography Helper CLI!')
cli.version('0.0.1')
cli.name('photography')
cli.usage('<command>')

cli
  .command('location-report')
  .description(
    'Creates a Report for a Photographic Location, so that you can organize your trip!'
  )
  .action(getLocationReport)

cli
  .command('locations')
  .description('Edit your saved Locations')
  .action(editLocations)

cli
  .command('checklist')
  .description(
    'Get a checklist of all the things you should bring with you on a shoot day'
  )
  .action(checklist)

cli.parse()
