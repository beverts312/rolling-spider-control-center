import * as RollingSpider from 'rolling-spider';

export class Drone {
    private spider: RollingSpider;

    public isInitialized(): boolean {
        return this.initialized;
    }
    private initialized: boolean = false;

    public readonly initialize = (): Promise<void> => new Promise<void>(resolve => {
        this.spider = new RollingSpider();
        console.log('searching for drone');

        this.spider.connect(() => {
            console.log('connected to drone');
            this.spider.setup(() => {
                console.log('initializing drone');
                this.spider.flatTrim();
                this.spider.startPing();
                this.spider.flatTrim();
                console.log('initialization complete');
                setTimeout(() => {
                    console.log(`${this.spider.name} is ready for flight`);
                    this.initialized = true;
                    resolve();
                }, 1000);

            });
        });
    });

    public emergency(): void {
        console.log('emergency');
        this.spider.emergency();
        setTimeout(function () {
            this.spider.disconnect();
            process.exit();
        }, 3000);
    }

    public takeOff(): void {
        console.log('taking off');
        this.spider.takeOff();
    }

    public land(): void {
        console.log('landing');
        this.spider.land();
    }

    public forward(steps: number): void {
        console.log(`forward ${steps}`);
        this.spider.forward({ steps: steps });
    }

    public backward(steps: number): void {
        console.log(`backward ${steps}`);
        this.spider.backward({ steps: steps });
    }

    public turnLeft(steps: number): void {
        console.log(`turn left ${steps}`);
        this.spider.turnLeft({ steps: steps });
    }

    public tiltLeft(steps: number): void {
        console.log(`tilt left ${steps}`);
        this.spider.tiltLeft({ steps: steps });
    }

    public turnRight(steps: number): void {
        console.log(`turn right ${steps}`);
        this.spider.turnRight({ steps: steps });
    }

    public tiltRight(steps: number): void {
        console.log(`tilt right ${steps}`);
        this.spider.tiltRight({ steps: steps });
    }

    public up(steps: number): void {
        console.log(`up ${steps}`);
        this.spider.up({ steps: steps });
    }

    public down(steps: number): void {
        console.log(`down ${steps}`);
        this.spider.down({ steps: steps });
    }

    public leftFlip(steps: number): void {
        console.log(`left flip ${steps}`);
        this.spider.leftFlip({ steps: steps });
    }

    public rightFlip(steps: number): void {
        console.log(`right flip ${steps}`);
        this.spider.rightFlip({ steps: steps });
    }

    public frontFlip(steps: number): void {
        console.log(`front flip ${steps}`);
        this.spider.frontFlip({ steps: steps });
    }

    public backFlip(steps: number): void {
        console.log(`back flip ${steps}`);
        this.spider.backFlip({ steps: steps });
    }
}