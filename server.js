const application = process.argv[2];
switch (application) {
    case 'scraper':
        require('./backend/processes/scraper').schedule();
        break;
    case 'insert':
        require('./backend/processes/scraper').insert();
        break;
    default:
        require('./backend/processes/webserver');
}
