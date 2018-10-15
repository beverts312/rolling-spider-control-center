import { Drone } from './drone';

const config = require('../config.json');
const STEPS = 2;

export class DroneController {

  constructor(private drone: Drone) { }

  public isActive(): boolean {
    return this.active;
  }
  private active: boolean = true;


  public matchControl(value: string, type: 'xbox' | 'key'): void {
    if (!this.active) {
      console.log('busy...blocking control');
      return;
    }
    switch (value) {
      case config.controls.emergency[type]:
        this.drone.emergency();
        break;
      case config.controls.takeOff[type]:
        this.drone.takeOff();
        break;
      case config.controls.forward[type]:
        this.drone.forward(STEPS);
        this.cooldown();
        break;
      case config.controls.backward[type]:
        this.drone.backward(STEPS);
        this.cooldown();
        break;
      case config.controls.turnLeft[type]:
        this.drone.turnLeft(STEPS);
        this.cooldown();
        break;
      case config.controls.tiltLeft[type]:
        this.drone.tiltLeft(STEPS);
        this.cooldown();
        break;
      case config.controls.tiltRight[type]:
        this.drone.tiltRight(STEPS);
        this.cooldown();
        break;
      case config.controls.turnRight[type]:
        this.drone.turnRight(STEPS);
        this.cooldown();
        break;
      case config.controls.up[type]:
        this.drone.up(STEPS * 2.5);
        this.cooldown();
        break;
      case config.controls.down[type]:
        this.drone.down(STEPS * 2.5);
        this.cooldown();
        break;
      case config.controls.frontFlip[type]:
        this.drone.frontFlip(STEPS);
        this.cooldown();
        break;
      case config.controls.leftFlip[type]:
        this.drone.leftFlip(STEPS);
        this.cooldown();
        break;
      case config.controls.rightFlip[type]:
        this.drone.rightFlip(STEPS);
        this.cooldown();
        break;
      case config.controls.backFlip[type]:
        this.drone.backFlip(STEPS);
        this.cooldown();
        break;
      case config.controls.land[type]:
        this.drone.land();
        break;
    }
  }

  private cooldown(): void {
    this.active = false;
    setTimeout(() => {
      this.active = true;
    }, STEPS * 24);
  }
}