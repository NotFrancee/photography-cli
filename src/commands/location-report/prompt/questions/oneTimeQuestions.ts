import { PromptObject } from 'prompts';

const oneTimeQuestions: PromptObject[] = [
  {
    type: 'number',
    name: 'latitude',
    message: 'Latitude: ',
    min: -90,
    max: 90,
    float: true,
    round: 15,
  },
  {
    type: 'number',
    name: 'longitude',
    message: 'Longitude: ',
    min: -180,
    max: 180,
    float: true,
    round: 15,
  },
  {
    type: 'confirm',
    name: 'confirmation',
    message: 'Check the Coordinates. Are they correct? ',
    initial: true,
  },
];

export default oneTimeQuestions;
