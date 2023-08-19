#include "include.hpp"

// CLASSES

struct Motor {
  int port0;
  int port1;

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

// DEFINITIONS

Motor lmotor(6, 7);
Motor rmotor(0, 1);