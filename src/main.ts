import { Drone } from './drone';
import { DroneController } from './controller';
import { KeyboardController } from './keyboard';

async function main() {
    const drone = new Drone();
    await drone.initialize();
    const droneController = new DroneController(drone);
    
    const keyboardController = new KeyboardController(droneController);
    keyboardController.initialize();
}

main().catch(err => {
    console.error('there was a problem');
    console.error(err);
    process.exit(1);
});