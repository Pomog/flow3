import {EquipmentUsage} from "./common/Equipment.ts";
import {MaterialUsage} from "./common/Material.ts";
import {ActualParameter, ProcessParameter} from "./common/Parameter.ts";
import {UtilityUsage} from "./common/Utility.ts";
import {StepKind} from "./enumsAndUnits/ProcesEnums.ts";
import {AdditionPayload} from "./payloads/AdditionPayload.ts";
import {SeparationPayload} from "./payloads/SeparationPayload.ts";
import {AnalysisPayload} from "./payloads/AnalysisPayload.ts";
import {StoragePayload} from "./payloads/StoragePayload.ts";
import {TransformationPayload} from "./payloads/TransformationPayload.ts";
import {UserAction} from "./common/UserAction.ts";

export interface BaseStep {
    baseStepId: string;
    kind: StepKind;
    title: string;
    projectName: string;
    synthesisStage: string;
    description: string;
    comments?: string;

    plannedStart: string;   // ISO-8601
    plannedEnd: string; // ISO-8601
    expectedDurationMin: number;

    labPersonnelRequired: number;
    equipment: EquipmentUsage;

    inputMaterials:  MaterialUsage[];

    /** Leave empty if step doesn't transform or create new material (e.g., Storage) */
    outputMaterials: (MaterialUsage & { isMain: boolean; destStepIds?: string[] })[];
    /** Optional; empty for most non-transformative steps */
    outputWastes:    MaterialUsage[];

    processParameters: ProcessParameter[];

    actualParameters: ActualParameter[];

    /** Optional; e.g., CoolingWater, Vacuum */
    utilities?: UtilityUsage[];

    qdqsRequired: boolean;

    previousStepId?: string;
    nextStepId?: string;

    version: string;    // '1.0', '1.1-draft'

    created: UserAction;
    updated: UserAction[];  // for Audit
}

export type ProcessStep =
    | (BaseStep & { kind: 'Addition';       payload: AdditionPayload })
    | (BaseStep & { kind: 'Separation';     payload: SeparationPayload })
    | (BaseStep & { kind: 'Transformation'; payload: TransformationPayload })
    | (BaseStep & { kind: 'Storage';        payload: StoragePayload })
    | (BaseStep & { kind: 'Analysis';       payload: AnalysisPayload });

export interface Process {
    id: string;
    name: string;
    description?: string;
    steps: ProcessStep[];
    version: string;
    created: UserAction;
    updated: UserAction[];
    signed?: UserAction[];
}