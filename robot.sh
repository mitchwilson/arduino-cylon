#!/bin/bash
source robot.conf;
case $1 in
    "setup") gort arduino upload firmata $ARDUINO_PORT;;
    "1") node $ROBOT_1;;
    "5") node $ROBOT_5;;
    "help") echo "Usage: ./cylon.sh
./cylon.sh help
./cylon.sh setup
./cylon.sh 1
./cylon.sh 5

Arguments:
none    When run as ./cylon.sh without an argument, run setup then example 1.
help    Display this help information.
setup   Upload Firmata firmware to Arduino so that cylon.js can communicate via the Firmata protocol.
1       Run the first robot example.
5       Run the fifth robot example.
";;
    *) gort arduino upload firmata $ARDUINO_PORT;node robot/1/blinking_an_led.js;;
esac
