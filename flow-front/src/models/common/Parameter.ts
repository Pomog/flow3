import { Criticality } from '../enumsAndUnits/ProcesEnums.ts';
import {Unit} from "../enumsAndUnits/UnitSchema.ts";

export interface ProcessParameter {
    processParameterId: string;
    name: string;
    target: number;
    max: number;
    min: number;
    unit: Unit;
    criticality: Criticality;
}

export interface ActualParameter {
    actualParameterId: string;
    name: string;
    value: number;
    unit: Unit;
    timeStamp: string;      // ISO-8601
}