import { Log } from '@arikajs/logging';
import { Job } from './Contracts';

export class Worker {
    constructor(private driver: any) {
        // In future: Worker will pull from driver
    }

    async process(job: Job) {
        const jobName = job.constructor.name || 'AnonymousJob';
        Log.info(`Processing job: ${jobName}`);

        const start = Date.now();
        try {
            await job.handle();
            const duration = Date.now() - start;
            Log.info(`Processed job: ${jobName} - ${duration}ms`);
        } catch (e: any) {
            Log.error(`Job failed: ${jobName}`, { error: e.message });
            throw e;
        }
    }
}
