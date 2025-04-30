import {SeparationMethod, SeparationSubMethod} from "../enumsAndUnits/ProcesEnums.ts";

export interface SeparationPayload {
    /** base separation method */
    method: SeparationMethod;

    /** additional method — optional */
    subMethod?: SeparationSubMethod;

    /** e.g. 'remove solvent', 'collect cake', 'reduce moisture <5 %' */
    objective?: string;
}