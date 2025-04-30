import { Criticality } from '../enumsAndUnits/ProcesEnums.ts';
import {Unit} from "../enumsAndUnits/UnitSchema.ts";

export interface ProcessParameter {
    name: string;
    target: number;
    unit: Unit;
    criticality: Criticality;
}