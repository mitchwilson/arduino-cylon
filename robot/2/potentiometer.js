var arduino = require('../../arduino.json');
var cylon = require('cylon');

cylon.robot({
    connections: arduino.connections,
    devices: arduino.two.devices,
    work: function(my) {
        var pressed = false;
        var brightness = 255;
        my.button.on('push', function() {
            if(!pressed) {
                pressed = true;
                setTimeout(function() {
                    my.led.toggle();
                    pressed = false;
                }, 5);
            }
        });
        my.sensor.on('analogRead', function(val) {
            brightness = val.fromScale(0, 1023).toScale(0, 255) | 0;
            my.led.brightness(brightness);
        });

    }
}).start();
