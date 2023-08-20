# HackThe6ix_2023 — GuideBot
An intelligent navigation assistant that combats the challenges of visual impairment

## Inspiration

The demand for accessibility continues to increase within urbanized societies. In particular, those with severe vision impairment or anopia can face significant challenges in independent navigation, often relying on senses of touch and hearing and the guidance of service animals. GuideBot aims to improve the lives of those with vision impairments by functioning as an intelligent navigation assistant that can help identify directions and relay information about surroundings.

## What it does

The GuideBot robot specializes in helping people with vision impairments navigate indoor spaces. In particular, it determines the layout of surrounding hallways and obstacles and guides users to navigate safely and efficiently. It is also capable of recognizing surrounding objects and providing descriptions, which can be converted into audio or tactile information and presented to the user. 

GuideBot is currently still in an experimental phase in which its functionality is limited. Some of its features are showcased on the product website.

## How we built it

The experimental build of GuideBot was built on a breadboard circuit with Arduino Components and runs on the ESP32 microcontroller.

The GuideBot web app was written using HTML, JavaScript, and Bootstrap 5. Object recognition was implemented using the Coco SSD model built on the TensorFlow neural network library.

## Challenges we ran into

### Acess to physical resources

The primary challenge we faced was the lack of physical resources and components required to develop the robot's full functionality. Our access to physical sensors was limited to a few ultrasonic distance sensors, which had very limited range and were unable to fulfill image recognition functionality. Provided motors lacked torque and could not efficiently maneuver the robot. Several components also needed to be improvised using recycled material.

Due to physical limitations, much of our functionality was instead displayed as experimental web apps on the product website.

### Compatibility

Portions of our original website, which were written in React, were unable to connect to the HTML components of the web app. Because of this, the React portions were rewritten in HTML.

## Accomplishments that we're proud of

We were able to quickly improvise a web app to showcase functionality to overcome the functional limitations of our hardware.

We were able to connect the GuideBot to Bluetooth to control the robot remotely using a mobile device.

## What we learned

We learned how to assemble digital circuits and use the ESP32 microcontroller to control motors, buzzers, and Arduino components. It was also our first time using object recognition libraries.

## What's next for GuideBot

Due to limitations of the hardware we had access to, the current stage of our product can only be considered a prototype, and many features must still be implemented. Things that we could potentially implement in the future include:

### Audio language processing:

- Use speech recognition to collect oral instructions from the user
- Use a natural language processor to understand auditory instructions intelligently
- Use text-to-speech functionality to relay information and feedback to users

### Google Maps and traffic integration:
- Navigate to locations using Google Maps and GPS
Determine position relative to Google Maps using GPS
- Integrate with traffic signals, etc.