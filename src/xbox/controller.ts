import { DroneController } from '../controller';
import { XboxControllerEvent } from './event';
import { XboxButtonControl } from './button';
import { XboxAxisControl } from './axis';

const config = require('../../config.json');

export class XboxController {
  constructor(private controller: DroneController) { }

  public initialize(): void {
    const joystick = new (require('joystick'))(config.controller.id, config.controller.deadzone, config.controller.sensetivity);
    joystick.on('button', event => this.buttonHandler(event));
    joystick.on('axis', event => this.axisHandler(event));
    joystick.on('error', console.error);
    console.log('xbox controller initialized');
  }

  private readonly buttonHandler = (event: XboxControllerEvent): void => {
    if (!event.init && event.value === 1) {
      this.controller.matchControl(XboxButtonControl[event.number], 'xbox');
    }
  }

  private readonly axisHandler = (event: XboxControllerEvent): void => {
    if (!event.init && event.value !== 0) {
      console.error(`Handler for ${XboxAxisControl[event.number]} is not implimented`);
    }
  }
}