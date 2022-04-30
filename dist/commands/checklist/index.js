var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from 'chalk';
import { logger } from '../../utils';
import toggleMenu from './menu/toggleMenu';
import toggleChecklist from './toggleChecklist';
const checklist = () => __awaiter(void 0, void 0, void 0, function* () {
    logger.subtitle('Checklist');
    let exit = false;
    do {
        yield toggleChecklist();
        const nextAction = yield toggleMenu();
        switch (nextAction) {
            case 'toggleChecklist':
                break;
            case 'exit':
                console.log(chalk.green.bold('Ok, see you soon!'));
                exit = true;
                break;
            case 'newItem':
                console.log('still to implement');
                break;
            default:
                console.log('something unexpected happened');
        }
    } while (!exit);
});
export default checklist;
//# sourceMappingURL=index.js.map