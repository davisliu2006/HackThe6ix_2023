#include <Arduino.h>
#include "BluetoothSerial.h"

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;

const int botR = 2; //green wire at the bottom  left front facing you
const int botL = 4; //green wire at bottom right front facing you
const int topR = 12; //blue top wire 
const int topL = 14; //blue top wire 
const int enableTop = 15; //speed control for front
const int enableBot = 34; //speed control for back

void bottomDrive(int rev){
  if(rev!=0){
    digitalWrite(botR, HIGH);
    digitalWrite(botL, LOW);
  }else{
    digitalWrite(botR, LOW);
    digitalWrite(botL, HIGH);
  }
}
void topDrive(int rev){
  if(rev!=0){
    digitalWrite(topR, HIGH);
    digitalWrite(topL, LOW);
  }else{
    digitalWrite(topR, LOW);
    digitalWrite(topL, HIGH);
  }
}
void brake(){
  digitalWrite(topR, LOW);
  digitalWrite(topL, LOW);
  digitalWrite(botR, LOW);
  digitalWrite(botL, LOW);
}
void buzz(){
  tone(27, 1000);
}

char r; //reading char

int pins[] = {2, 4, 12, 14};

void setup() {
  SerialBT.begin("ECsp32BT"); //Bluetooth device name
  SerialBT.println("\nHello driver!");
  for(int i:pins){
    pinMode(i, OUTPUT);
  }
  analogWrite(enableTop, 150);
  analogWrite(enableBot, 150);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (SerialBT.available()) {
    r = SerialBT.read();
    if(r=='f') {
      SerialBT.println("forwards");
      bottomDrive(1);
    } else if(r=='b'){
      SerialBT.println("backwards");
      topDrive(1);
      
    } else if(r=='x'){
      SerialBT.println("braking");
      brake();
    } else if(r=='q'){
      SerialBT.println("buzzing");
      buzz();
      delay(1000);
      noTone(27);
    } else if(r=='s'){
      SerialBT.println("change speed to:");
      delay(1000);
      int tempSpeed = SerialBT.parseInt();
      SerialBT.println("speed changed to :" + tempSpeed);
      analogWrite(enableTop, tempSpeed);
      analogWrite(enableBot, tempSpeed);
    }

  }
}

