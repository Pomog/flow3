import {Utility} from "../enumsAndUnits/ProcesEnums.ts";
import {Unit} from "../enumsAndUnits/UnitSchema.ts";

export interface UtilityUsage {
    utilityUsageId: string;
    utility: Utility,
    mediumName?: string; // 'Nitrogen'
    amount: number;
    unit: Unit;
}