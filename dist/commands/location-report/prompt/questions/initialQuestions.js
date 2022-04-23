const initialQuestions = [
    {
        type: 'date',
        name: 'date',
        message: 'Date for the report: ',
        mask: 'YYYY-MM-DD',
    },
    {
        type: 'select',
        name: 'location',
        message: 'Select an option for the location',
        choices: [
            {
                title: 'Use a saved location',
                value: 'useSaved',
                disabled: true,
            },
            {
                title: 'Create a new location',
                value: 'createNew',
                disabled: true,
            },
            {
                title: 'Input Latitude and Longitude',
                value: 'oneTime',
            },
        ],
        initial: 2,
    },
];
export default initialQuestions;
//# sourceMappingURL=initialQuestions.js.map