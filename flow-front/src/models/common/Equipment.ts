export interface EquipmentUsage {
    equipmentId: string;
    code: string;
    name: string;
    description?: string;
    capacityL?: number;
    energyKWhPerHour?: number;
}