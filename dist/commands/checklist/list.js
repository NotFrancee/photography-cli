import chalk from 'chalk';
const cameraGear = [
    'Your Camera',
    'The Battery',
    'SD Card',
    'Have you charged your battery?',
    '18-55mm Lens',
    '50mm Lens',
    'Tripod',
    'Lens Wipes',
];
const hikingGear = ['HeadLight', 'Water Bottles', 'Food'];
const everydayStuff = ['Home Keys', 'Portfolio', 'Phone Charger', 'Mask'];
const selectPrompt = {
    type: 'multiselect',
    name: 'checklist',
    message: 'Checklist',
    choices: [
        { title: chalk.green.bold('Camera Gear') },
        ...cameraGear.map((item) => ({
            title: item,
        })),
        { title: chalk.green.bold('Hiking Gear') },
        ...hikingGear.map((item) => ({
            title: item,
        })),
        { title: chalk.green.bold('Everyday Stuff') },
        ...everydayStuff.map((item) => ({
            title: item,
        })),
    ],
};
export default selectPrompt;
//# sourceMappingURL=list.js.map