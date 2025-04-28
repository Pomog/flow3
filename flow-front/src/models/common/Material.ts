import {MaterialSource} from "../enums.ts";

export interface MaterialRef {
    materialId: string;
    code: string;
    cas?: string;
    name: string;
    grade?: string;
    densityKgL?: number;
    costPerKg?: number;
    molarMass?: number;
}

export interface MaterialUsage extends MaterialRef {
    source: MaterialSource;
    amountKg: number;
    amountL?: number;
    producedInStepId?: string;
}