const application = process.argv[2];
switch (application) {
    case 'test':
        require(`./backend/lib/${process.argv[3]}`).get.apply(null, process.argv.slice(4))
          .then(console.log).catch(console.error);
        break;
    case 'scraper':
        require('./backend/processes/scraper').schedule();
        break;
    case 'insert':
        require('./backend/processes/scraper').insert();
        break;
    default:
        require('./backend/processes/webserver');
}
