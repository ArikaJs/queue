
import { Job } from './Contracts';

export class Worker {
    constructor(private driver: any) {
        // In future: Worker will pull from driver
    }

    async process(job: Job) {
        // Wrap execution with safety/hooks
        try {
            await job.handle();
        } catch (e: any) {
            console.error(e);
            throw e;
        }
    }
}
