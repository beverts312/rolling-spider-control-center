import { Drone } from './drone';
import { DroneController } from './controller';
import { KeyboardController } from './keyboard';
import { XboxController } from './xbox';

async function main() {
    const drone = new Drone();
    await drone.initialize();
    const droneController = new DroneController(drone);
    
    const keyboardController = new KeyboardController(droneController);
    keyboardController.initialize();

    const xboxController = new XboxController(droneController);
    xboxController.initialize();

    setInterval(() => {
        drone.printStatus();
    }, 10000)
}

main().catch(err => {
    console.error('there was a problem');
    console.error(err);
    process.exit(1);
});