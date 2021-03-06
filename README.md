# Rolling Spider Control Center

The Rolling Spider is a [cheap](https://www.amazon.com/Parrot-PF723000-ROLLING-SPIDER/dp/B00KZM53NC/ref=sr_1_3?ie=UTF8&qid=1539544957&sr=8-3&keywords=rolling+spider&dpID=41FCJAVi8RL&preST=_SY300_QL70_&dpSrc=srch) drone that is meant to be controlled with your phone over bluetooth, that experience sucks. This project leverages the great work done [here](https://github.com/voodootikigod/node-rolling-spider) to provide better control interfaces for the drone.

## Setup and Running Scripts

You will need to install the [noble prerequisists](https://github.com/noble/noble#prerequisites) for your platform.

You will need to install the dependencies in this project - `npm install`.

You may need to run scripts as `sudo` (unix/mac) in order to use bluetooth.

To build - `npm run build`.

To start (must build before starting) - `npm run start`.

## Controls

Controls can be overriden by modifying [config.json](./config.json).

| Action | Key |Xbox Contoller|
|--------|-----|--------------|
|emergency landing|m|Y|
|take off|t|B|
|land|q|A|
|forward|w|left stick up|
|backward|s|left stick down|
|tilt left|a|left stick left|
|tilt right|d|left stick right|
|up|up arrow|right stick up|
|down|down arrow|right stick down|
|turn right|right arrow|right stick right|
|turn left|left arrow|right stick left|
|front flip|f|left tigger|
|back flip|k|right trigger|
|left flip|j|left bumper|
|right flip|l|right bumper|