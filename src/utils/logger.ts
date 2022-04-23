import chalk from 'chalk'

const title = (text: string) => {
  const title = chalk.red.bold(text)
  console.log(title)
}

const subtitle = (text: string) => {
  const subtitle = chalk.redBright.bold(text)
  console.log(subtitle)
}

export default { title, subtitle }
