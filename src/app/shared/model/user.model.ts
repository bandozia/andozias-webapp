import { Group } from './group.model';

export interface User {
    Id: number,
    Name: string;
    Group: Group;
    Roles: string[];
}