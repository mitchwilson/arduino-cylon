var arduino = require('../../arduino.json');
var cylon = require('cylon');
cylon.robot({
    connections: arduino.connections,
    devices: arduino.one.devices,
    work: function(my) {
        every((1).second(), function() {
            my.led.toggle();
        });
    }
}).start();
