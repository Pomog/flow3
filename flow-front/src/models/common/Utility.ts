import {Utility} from "../enumsAndUnits/ProcesEnums.ts";
import {unitSchema} from "../enumsAndUnits/UnitSchema.ts";

export interface UtilityUsage {
    utility: Utility,
    mediumName?: string; // 'Nitrogen'
    amount: number;
    unit: unitSchema;
}