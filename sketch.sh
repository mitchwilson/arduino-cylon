#!/bin/bash
source sketch.conf;
case $1 in
    "1") $ARDUINO_PATH --upload $SKETCH_1;;
    "5") $ARDUINO_PATH --upload $SKETCH_5;;
    "help") echo "Usage: ./arduino.sh
./arduino.sh help
./arduino.sh 1
./arduino.sh 5

Arguments:
none    When run as ./arduino.sh without an argument, then run example 1.
help    Display this help information.
1       Run the first robot example.
5       Run the fifth robot example.
";;
    *) echo 'WARNING: no matching Arduino sketch program found';;
esac
