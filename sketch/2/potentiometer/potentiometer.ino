#include "./devices.h"

void setup() {
    pinMode(POT_PIN, INPUT);
    pinMode(LED_PIN, OUTPUT);
}

void loop() {
    float scale = 255.0/1023.0;
    analogWrite(LED_PIN, scale * analogRead(POT_PIN));
}
