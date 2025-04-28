import {PayloadMode} from "../enums.ts";

export interface AdditionPayload {
    mode: PayloadMode;
    feedRateKgMin?: number;
    durationMin: number;
}