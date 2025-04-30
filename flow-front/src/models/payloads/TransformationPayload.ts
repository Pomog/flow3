import {Transformation} from "../enumsAndUnits/ProcesEnums.ts";

export interface TransformationPayload {
    transformation: Transformation;
    temperatureProfile: string;   // JSON or free text
    pressureProfile?: string;
    targetConversionPct?: number;
}