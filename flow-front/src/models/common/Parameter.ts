import { Criticality, Unit } from '../enums';

export interface ProcessParameter {
    name: string;
    target: number;
    unit: Unit;
    criticality: Criticality;
}