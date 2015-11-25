var config = require('../config.json');
var cylon = require('cylon');
var devices = require('./devices.json');
cylon.robot({
    connections: config.connections,
    devices: devices,
    work: function(my) {
        my.button.on('push', function() {
            setTimeout(function() {
                my.led.toggle();
            }, 10)
        });
    }
}).start();
