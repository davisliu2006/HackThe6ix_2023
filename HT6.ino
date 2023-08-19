#include "globals.hpp"

// DEFINITIONS

// EVENTS

void at_wall() {
  
}
void at_intersection() {

}

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
  if (dist <= WALL_DIST) {
    at_wall();
  }
}