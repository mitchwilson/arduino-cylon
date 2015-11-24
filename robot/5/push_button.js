var config = require('../config.json');
var cylon = require('cylon');
var lastButton = false;
var flipState = false;
var currentButton = false;;

cylon.robot({
    connections: {
        arduino: {
            adaptor: config.adaptor,
            port: config.port
        }
    },
    devices: {
        button: {
            driver: 'button',
            pin: 8
        },
        led: {
            driver: 'led',
            pin: 13
        }
    },
    work: function(my) {
        my.button.on('push', function() {
            setTimeout(function() {
                my.led.toggle();
            }, 10)
        });
    }
}).start();
