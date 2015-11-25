var arduino = require('../../arduino.json');
var cylon = require('cylon');
cylon.robot({
    connections: arduino.connections,
    devices: arduino.five.devices,
    work: function(my) {
        my.button.on('push', function() {
            setTimeout(function() {
                my.led.toggle();
            }, 10);
        });
    }
}).start();
