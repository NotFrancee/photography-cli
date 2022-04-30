import { PromptObject } from 'prompts'

const menuQuestions: PromptObject[] = [
  {
    type: 'select',
    name: 'nextAction',
    message: 'What do you want to do next? ',
    choices: [
      {
        title: 'See the checklist Again',
        value: 'toggleChecklist',
      },
      {
        title: 'Add a new item to the checklist',
        value: 'newItem',
        disabled: true,
      },
      {
        title: 'Exit the CLI',
        value: 'exit',
      },
    ],
  },
]

export default menuQuestions
