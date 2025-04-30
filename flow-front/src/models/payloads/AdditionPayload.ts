import {PayloadMode} from "../enumsAndUnits/ProcesEnums.ts";

export interface AdditionPayload {
    mode: PayloadMode;
    feedRateKgMin?: number;
    durationMin: number;
}