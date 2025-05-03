import { User } from '../../models/common/User.ts';
export function getCurrentUser(): User | null {
    // Later you’ll replace this with real auth from Redux or session
    const user: User = {
        id: 'demo-user-id',
        username: 'demo',
        fullName: 'Demo User',
        email: 'demo@example.com',
        roles: ['operator'], // simulate roles here
        signatureKey: 'demo-key',
        createdAt: new Date().toISOString(),
    };

    return user;
}
