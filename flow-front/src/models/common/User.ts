import roles from '../enumsAndUnits/roles.json' assert { type: 'json' };

export const ROLES = roles as const;
export type Role = typeof ROLES[number];

export interface User {
    id: string;
    username: string;
    fullName: string;
    email: string;
    roles: Role[];

    locale?: string;

    timeZone?: string;
    department?: string;
    title?: string;

    signatureKey: string;
    deactivatedAt?: string; // ISO-8601
    createdAt: string;      // ISO-8601
    updatedAt?: string;     // ISO-8601
}