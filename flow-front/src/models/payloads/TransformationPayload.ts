import {Transformation} from "../enums.ts";

export interface TransformationPayload {
    transformation: Transformation;
    temperatureProfile: string;   // JSON or free text
    pressureProfile?: string;
    targetConversionPct?: number;
}