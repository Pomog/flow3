import {PayloadMode} from "../enumsAndUnits/ProcesEnums.ts";

export interface AdditionPayload {
    additionPayloadId: string;
    mode: PayloadMode;
    feedRateKgMin?: number;
    durationMin: number;
}