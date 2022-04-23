import prompts from 'prompts';
import { initialQuestions, oneTimeQuestions } from './questions';

const promptUser = async () => {
  const { date, location } = await prompts(initialQuestions);

  let confirmed = false;
  let lat, lon;

  do {
    switch (location) {
      case 'useSaved':
        console.log('not supported yet...');
        break;

      case 'createNew':
        console.log('not supported yet...');
        break;

      case 'oneTime':
        const response = await prompts(oneTimeQuestions);

        confirmed = response.confirmation;
        lat = response.latitude;
        lon = response.longitude;
        break;

      default:
        throw new Error('sorry but that was not an option');
    }
  } while (!confirmed);

  return {
    date,
    location,
    lat,
    lon,
  };
};

export default promptUser;
