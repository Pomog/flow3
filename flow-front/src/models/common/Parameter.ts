import { Criticality } from '../enumsAndUnits/ProcesEnums.ts';
import {Unit} from "../enumsAndUnits/UnitSchema.ts";

export interface ProcessParameter {
    name: string;
    target: number;
    max: number;
    min: number;
    unit: Unit;
    criticality: Criticality;
}

export interface ActualParameter {
    name: string;
    value: number;
    unit: Unit;
    timeStamp: string;      // ISO-8601
}