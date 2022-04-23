var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prompts from 'prompts';
import { initialQuestions, oneTimeQuestions } from './questions';
const promptUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const { date, location } = yield prompts(initialQuestions);
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
                const response = yield prompts(oneTimeQuestions);
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
});
export default promptUser;
//# sourceMappingURL=promptUser.js.map