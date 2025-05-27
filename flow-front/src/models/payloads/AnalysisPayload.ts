export interface AnalysisPayload {
    analysisPayloadId: string;
    analysisName: string;
    specification?: string;
    rawDataUri?: string;
    processedDataUri?: string;
    passStepId: string;
    failStepId: string;
}