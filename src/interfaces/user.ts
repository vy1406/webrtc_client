import { USER_ROLES } from "@utils/constants";

export interface User {
    id: string;
    fullName: string;
    role: USER_ROLES;
  }
  