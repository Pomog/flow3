import {Unit, Utility} from "../enums.ts";

export interface UtilityUsage {
    utility: Utility,
    mediumName?: string; // 'Nitrogen'
    amount: number;
    unit: Unit;
}