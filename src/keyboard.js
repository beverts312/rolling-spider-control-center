'use strict';

const keypress = require('keypress');
const RollingSpider = require('rolling-spider');
const rollingSpider = new RollingSpider();
const config = require('../config.json');
const initialize = require('./initialize');

let ACTIVE = true;
const STEPS = 2;


function cooldown() {
  ACTIVE = false;
  setTimeout(function () {
    ACTIVE = true;
  }, STEPS * 12);
}

initialize(rollingSpider);

// make `process.stdin` begin emitting 'keypress' events
keypress(process.stdin);

// listen for the 'keypress' event
process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on('keypress', function (ch, key) {
  if (ACTIVE && key) {
    switch (key.name) {
      case config.controls.emergency.key:
        console.log('emergency');
        rollingSpider.emergency();
        setTimeout(function () {
          process.exit();
        }, 3000);
        break;
      case config.controls.takeOff.key:
        console.log('takeoff');
        rollingSpider.takeOff();
        break;
      case config.controls.forward.key:
        console.log(`forward ${STEPS}`);
        rollingSpider.forward({ steps: STEPS });
        cooldown();
        break;
      case config.controls.backward.key:
        console.log(`backward ${STEPS}`);
        rollingSpider.backward({ steps: STEPS });
        cooldown();
        break;
      case config.controls.turnLeft.key:
        console.log(`turn left ${STEPS}`);      
        rollingSpider.turnLeft({ steps: STEPS });
        cooldown();
        break;
      case config.controls.tiltLeft.key:
        console.log(`tilt left ${STEPS}`);
        rollingSpider.tiltLeft({ steps: STEPS });
        cooldown();
        break;
      case config.controls.tiltRight.key:
        console.log(`tilt right ${STEPS}`);
        rollingSpider.tiltRight({ steps: STEPS });
        cooldown();
        break;
      case config.controls.turnRight.key:
        console.log(`turn right ${STEPS}`);
        rollingSpider.turnRight({ steps: STEPS });
        cooldown();
        break;
      case config.controls.up.key:
        console.log(`up ${STEPS * 2.5}`)
        rollingSpider.up({ steps: STEPS * 2.5 });
        cooldown();
        break;
      case config.controls.down.key:
        console.log(`down ${STEPS * 2.5}`);    
        rollingSpider.down({ steps: STEPS * 2.5 });
        cooldown();
        break;
      case config.controls.frontFlip.key:
        console.log(`frontflip ${STEPS}`);        
        rollingSpider.frontFlip({ steps: STEPS });
        cooldown();
        break;
      case config.controls.leftFlip.key:
        console.log(`leftflip ${STEPS}`);
        rollingSpider.leftFlip({ steps: STEPS });
        cooldown();
        break;
      case config.controls.rightFlip.key:
        console.log(`rightflip ${STEPS}`);  
        rollingSpider.rightFlip({ steps: STEPS });
        cooldown();
        break;
      case config.controls.backFlip.key:
        console.log(`backflip ${STEPS}`);  
        rollingSpider.backFlip({ steps: STEPS });
        cooldown();
        break;
      case config.controls.land.key:
        console.log('landing');  
        rollingSpider.land();
        break;
      }
  }
  if (key && key.ctrl && key.name === 'c') {
    process.stdin.pause();
    process.exit();
  }
});