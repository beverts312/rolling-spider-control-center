import { XboxControllerEvent } from './event';

export enum XboxAxisControl {
    leftX = 0,
    leftY = 1,
    lt = 2,
    rightX = 3,
    rightY = 4,
    rt = 5,
    dpadX = 6,
    dpadY = 7  
}

export const getAxisControlWithDirection = (event: XboxControllerEvent): string => `${XboxAxisControl[event.number]}.${getAxisDirection(event)}`;

function getAxisDirection(event: XboxControllerEvent): string {
    if (event.number === 0 || event.number === 3 || event.number === 6) {
        return event.value > 0 ? 'right' : 'left';
    }
    if (event.number === 1 || event.number === 4 || event.number === 7) {
        return event.value > 0 ? 'down' : 'up';
    }
    return event.value > 0 ? 'in' : 'out';
}