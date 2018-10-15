import * as keypress from 'keypress';
import { DroneController } from '../controller';

export class KeyboardController {
  constructor(private controller: DroneController) {}

  public initialize(): void {
    keypress(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        this.controller.matchControl(key.name, 'key');
      }
      if (key && key.ctrl && key.name === 'c') {
        process.stdin.pause();
        process.exit();
      }
    });
    console.log('keyboard initialized');
  }
}