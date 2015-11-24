var cylon = require('cylon');
var config = require('../config.json');
cylon.robot({
    connections: {
        arduino: {
            adaptor: 'firmata',
            port: config.port
        }
    },
    devices: {
        led: {
            driver: 'led',
            pin: 13
        }
    },
    work: function(my) {
        every((1).second(), function() {
            my.led.toggle();
        });
    }
}).start();
