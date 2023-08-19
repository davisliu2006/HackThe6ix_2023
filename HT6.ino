#include "globals.hpp"

// DEFINITIONS

// MAIN

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (Serial.available() > 0) {
    char input = Serial.read();
    Serial.println(input);
  }
  lmotor.set(1);
  int dist = sonar.ping_cm();
  Serial.println(dist);
}