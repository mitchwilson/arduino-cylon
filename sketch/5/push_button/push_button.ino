// Turn led on/off using button switch.
#include "./devices.h"
boolean lastButton = LOW;

// Flip led state if someone just pressed the button.
boolean buttonWasPressed() {
  boolean currentButton = digitalRead(BUTTON_PIN);
  boolean flipState = false;
  if(lastButton != currentButton) {
    delay(5);
    currentButton = digitalRead(BUTTON_PIN);
  }
  // Someone just pressed the button down ...
  if(currentButton == HIGH && lastButton == LOW) {
    // ... so flip state.
    flipState = !flipState;
  }
  // Store button state as global state for next iteration of the loop.
  lastButton = currentButton;
  return flipState;
}

// Main loop.
void loop() {
  if(buttonWasPressed()) {
    toggleLight();
  }
}

// Initial setup.
void setup() {
  pinMode(BUTTON_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
}

// Control the led light on/off.
void toggleLight() {
  digitalWrite(LED_PIN, !digitalRead(LED_PIN));
}
