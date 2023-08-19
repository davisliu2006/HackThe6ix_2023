#include "Arduino.h"
#include "include.hpp"

// CLASSES

struct Motor {
  int port0, port1;

  Motor() {}
  Motor(int p0, int p1) {
    port0 = p0;
    port1 = p1;
    pinMode(port0, OUTPUT);
    pinMode(port1, OUTPUT);
  }

  void set(int val) {
    digitalWrite(port0, max(-val, 0));
    digitalWrite(port1, max(val, 0));
  }
};

Struct Sound {
  int port;

  Sound() {}
  Sound(int p) {
    port = p;
  }

  void play(int freq) {
    tone(port, freq);
  }
  void stop() {
    noTone(port);
  }
};

// DEFINITIONS

Motor lmotor(2, 3);
Motor rmotor(4, 5);

NewPing sonar_l(6, 7);
NewPing sonar_f(8, 9);
NewPing sonar_r(10, 11);

Sound alert(12);

// FUNCTIONS

char buf[9];
const char* to_str(int x) {
  return itoa(x, buf, 10);
}