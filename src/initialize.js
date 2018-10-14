function initialize(rollingSpider) {
    console.log('searching for drone');

    rollingSpider.connect(function () {
        console.log('connected to drone');
        rollingSpider.setup(function () {
            console.log('initializing drone');
            rollingSpider.flatTrim();
            rollingSpider.startPing();
            rollingSpider.flatTrim();
            console.log('initialization complete');
            setTimeout(function () {
                console.log(`${rollingSpider.name} is ready for flight`);
                ACTIVE = true;
            }, 1000);

        });
    });
}
module.exports = initialize;