var config = require('../config.json');
var cylon = require('cylon');
var devices = require('./devices.json');
cylon.robot({
    connections: config.connections,
    devices: devices,
    work: function(my) {
        every((1).second(), function() {
            my.led.toggle();
        });
    }
}).start();
