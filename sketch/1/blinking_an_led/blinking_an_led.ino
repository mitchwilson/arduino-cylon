
#include "./devices.h"

int delayTime = 1000;

void blink() {
  digitalWrite(LED_PIN, HIGH);
  delay(delayTime);
  digitalWrite(LED_PIN, LOW);
  delay(delayTime);
}

void loop() {
  blink();
}

void setup() {
  pinMode(LED_PIN, OUTPUT);
}
