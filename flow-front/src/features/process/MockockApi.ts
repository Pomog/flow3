import {Process} from '../../models/BaseStep.ts';
import {v4 as uuidv4} from 'uuid';

/**
 * Simulates saving a process to a database.
 * Returns a promise with a new Process object including a generated `id`.
 */
export async function saveProcessToServer(process: Process): Promise<Process> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                ...process,
                id: uuidv4(),
            });
        }, 300);
    });
}
