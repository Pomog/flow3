import {User} from "./User.ts";
import {AuditAction} from "../enumsAndUnits/AuditAction.ts";

export interface UserAction {
    userId: string;

    user: User;

    /**
     * what happened: e.g. 'create', 'update', 'sign', 'approve', 'reject', 'delete'.
     */
    action: AuditAction;

    /** exact date-time in ISO-8601, immutable once written */
    at: string;

    /** free-text reason / comment – “reason-for-change” */
    comment?: string;

    /**
     * hash of the signature object - User + Content;
     * lets reviewers prove that the signature really belongs to User
     */
    signatureHash: string;
}