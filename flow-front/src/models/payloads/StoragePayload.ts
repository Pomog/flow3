import {StorageContainer} from "../enums.ts";

export interface StoragePayload {
    locationId: string;
    container: StorageContainer;
    containerVolumeL: number;
    maxHoldHours?: number;
}