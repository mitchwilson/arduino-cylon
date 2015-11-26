var arduino = require('../../arduino.json');
var cylon = require('cylon');
var pressed = false;
cylon.robot({
    connections: arduino.connections,
    devices: arduino.five.devices,
    work: function(my) {
        my.button.on('push', function() {
            if(!pressed) {
                pressed = true;
                setTimeout(function() {
                    my.led.toggle();
                    pressed = false;
                }, 5);
            };
        });
    }
}).start();
