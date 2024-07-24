import { v4 as uuidv4 } from 'uuid';
import { USER_ROLES } from '@interfaces/constants';
import { User } from '@interfaces/user';

export const users: User[] = [
    { id: uuidv4(), fullName: 'Doctor1', role: USER_ROLES.PRO },
    { id: uuidv4(), fullName: 'ClientName1', role: USER_ROLES.CLIENT },
    { id: uuidv4(), fullName: 'ClientName2', role: USER_ROLES.CLIENT },
];
