#include "globals.hpp"

// DEFINITIONS

char input;
int dist_f, dist_l, dist_r;

// FUNCTIONS

// input
int dist_map(int x) {
  return x + (x == 0)*250;
}
void read_dist() {
  dist_f = dist_map(sonar_f.ping_cm());
  dist_l = dist_map(sonar_l.ping_cm());
  dist_r = dist_map(sonar_r.ping_cm());
  Serial.println("Distance:");
  Serial.print(dist_l); Serial.print(" ");
  Serial.print(dist_f); Serial.print(" ");
  Serial.println(dist_r);
}

// drive
void set_drive(int l, int r) {
  lmotor.set(l); rmotor.set(r);
}
void left_unwall() {
  set_drive(-1, 1);
  while (dist_f <= WALL_DIST) {
    read_dist();
  }
  set_drive(0, 0);
}
void right_unwall() {
  set_drive(1, -1);
  while (dist_f < WALL_DIST) {
    read_dist();
  }
  set_drive(0, 0);
}

// EVENTS

void at_wall() {
  if (dist_l > WALL_DIST && dist_r <= WALL_DIST) { // left
    left_unwall();
  } else if (dist_r > WALL_DIST && dist_l <= WALL_DIST) { // right
    right_unwall();
  } else if (dist_l > WALL_DIST && dist_r > WALL_DIST) { // intersection
    at_intersection();
  } else if (dist_l <= WALL_DIST && dist_r <= WALL_DIST) { // dead end
    if (dist_l > dist_r) {
      left_unwall();
    } else {
      right_unwall();
    }
  }
}
void at_intersection() {

}

// MAIN

void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    input = Serial.read();
    Serial.println(input);
  }
  lmotor.set(1);
  Serial.println("asdf");

  // read dist
  read_dist();

  // process dist
  if (dist_f <= WALL_DIST) {
    // alert.play(440);
    tone(10, 440);
    at_wall();
  } else {
    // alert.stop();
  }

  delay(10);
}