
int ledPin = 13;
int delayTime = 1000;

void blink() {
  digitalWrite(ledPin, HIGH);
  delay(delayTime);
  digitalWrite(ledPin, LOW);
  delay(delayTime);
}

void loop() {
  blink();
}

void setup() {
  pinMode(ledPin, OUTPUT);
}
