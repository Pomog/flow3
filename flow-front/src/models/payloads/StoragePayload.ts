import {StorageContainer} from "../enumsAndUnits/ProcesEnums.ts";

export interface StoragePayload {
    locationId: string;
    container: StorageContainer;
    containerVolumeL: number;
    maxHoldHours?: number;
}