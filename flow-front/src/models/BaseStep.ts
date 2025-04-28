import {EquipmentUsage} from "./common/Equipment.ts";
import {MaterialUsage} from "./common/Material.ts";
import {ProcessParameter} from "./common/Parameter.ts";
import {UtilityUsage} from "./common/Utility.ts";
import {StepKind} from "./enums.ts";
import {AdditionPayload} from "./payloads/AdditionPayload.ts";
import {SeparationPayload} from "./payloads/SeparationPayload.ts";
import {AnalysisPayload} from "./payloads/AnalysisPayload.ts";
import {StoragePayload} from "./payloads/StoragePayload.ts";
import {TransformationPayload} from "./payloads/TransformationPayload.ts";

export interface BaseStep {
    id: string;
    kind: StepKind;
    title: string;
    projectName: string;
    synthesisStage: string;
    description: string;
    comments?: string;

    plannedStart: string;           // ISO-8601
    plannedEnd: string;             // ISO-8601
    expectedDurationMin: number;

    labPersonnelRequired: number;
    equipment: EquipmentUsage;

    inputMaterials:  MaterialUsage[];
    outputMaterials: (MaterialUsage & { isMain: boolean; destStepIds?: string[] })[];
    outputWastes:    MaterialUsage[];

    parameters: ProcessParameter[];
    utilities?: UtilityUsage[];

    qdqsRequired: boolean;

    previousStepId?: string;
    nextStepId?: string;
}

export type ProcessStep =
    | (BaseStep & { kind: 'Addition';       payload: AdditionPayload })
    | (BaseStep & { kind: 'Separation';     payload: SeparationPayload })
    | (BaseStep & { kind: 'Transformation'; payload: TransformationPayload })
    | (BaseStep & { kind: 'Storage';        payload: StoragePayload })
    | (BaseStep & { kind: 'Analysis';       payload: AnalysisPayload });