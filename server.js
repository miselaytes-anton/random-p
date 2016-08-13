const application = process.argv[2];
switch (application) {
    case 'init':
        require('./scripts/init');
        break;
    default:
        require('./backend');
}
