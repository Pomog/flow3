import {Transformation} from "../enumsAndUnits/ProcesEnums.ts";

export interface TransformationPayload {
    transformationPayloadId: string;
    transformation: Transformation;
    temperatureProfile: string;   // JSON or free text
    pressureProfile?: string;
    targetConversionPct?: number;
    stirringProfile?: string;
    energyProfile?: string;
}