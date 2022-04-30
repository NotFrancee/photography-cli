var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { logger } from '../../utils';
import Conf from 'conf';
import menu from './menu/menu';
const locations = () => __awaiter(void 0, void 0, void 0, function* () {
    logger.title('Location Report');
    const config = new Conf();
    const selectedAction = yield menu();
    switch (selectedAction) {
        case 'createLocation': {
        }
        case 'deleteLocation': {
        }
        case 'seeAllLocations': {
        }
        default: {
            console.log('this was not supposed to happen');
            return;
        }
    }
});
export default locations;
//# sourceMappingURL=index.js.map