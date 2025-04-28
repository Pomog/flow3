export interface AnalysisPayload {
    analysisName: string;
    specification?: string;
    rawDataUri?: string;
    processedDataUri?: string;
    passStepId: string;
    failStepId: string;
}