import { USER_ROLES } from "./constants";

export interface User {
    id: string;
    fullName: string;
    role: USER_ROLES;
  }
  