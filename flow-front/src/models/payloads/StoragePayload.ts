import {StorageContainer} from "../enumsAndUnits/ProcesEnums.ts";

export interface StoragePayload {
    storagePayloadId: string;
    location: string;
    container: StorageContainer;
    containerVolumeL: number;
    maxHoldHours?: number;
    maxHoldTemperatureCelsius?: number;
    minHoldTemperatureCelsius?: number;
    inertAtmosphere: boolean;
    lightProtection: boolean;
}