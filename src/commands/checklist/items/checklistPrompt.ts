import chalk from 'chalk'
import { PromptObject } from 'prompts'
import list from './list'

interface Choice {
  title: string
}

const choices = list.reduce<Choice[]>((arr, group) => {
  const groupTitle = { title: chalk.green.bold(group.title) }
  const groupItems = group.items.map((item) => ({
    title: item,
  }))

  return arr.concat(groupTitle, groupItems)
}, [])

const checklistPrompt: PromptObject = {
  type: 'multiselect',
  name: 'checklist',
  message: 'Checklist',
  choices,
}

export default checklistPrompt
