export type StepKind =
    | 'Addition'
    | 'Separation'
    | 'Transformation'
    | 'Storage'
    | 'Analysis';

/*
ICH Q8 & FDA Guidance on CPP/CQA
 */
export type Criticality = 'CP' | 'PC' | 'CY' | 'KP' | 'O' | 'N';

export type MaterialSource = 'Purchased' | 'Intermediate' | 'Recovered';

export type Utility =
    | 'Electricity'
    | 'CoolingWater'
    | 'ChilledWater'
    | 'InertGas'
    | 'CompressedAir'
    | 'Vacuum'
    | 'Other';

export type PayloadMode = 'batch' | 'continuous';

export type Transformation =
    | 'Chemical'
    | 'Crystallisation'
    | 'Other';

export type SeparationMethod =
    | 'filtration'
    | 'centrifugation'
    | 'distillation'
    | 'drying';

export type SeparationSubMethod =
    | 'vacuum'
    | 'pressure'
    | 'crossflow'
    | 'rotary';

export type StorageContainer =
    | 'Canister'
    | 'Drum'
    | 'IBC'
    | 'Bag';

