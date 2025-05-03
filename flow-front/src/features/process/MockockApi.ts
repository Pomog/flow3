import { Process } from '../../../model/BaseStep.ts';
import { v4 as uuidv4 } from 'uuid';

/**
 * Simulates saving a process to a database.
 * Returns a promise with a new Process object including a generated `id`.
 */
export async function saveProcessToServer(
    partial: Omit<Process, 'id'>
): Promise<Process> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                ...partial,
                id: uuidv4(),
            });
        }, 300);
    });
}
