import { ResourcePermissionDefinition } from '../ResourcePermission';
import { AuthToken } from './AuthToken';

export interface AuthAccountPermissionDefinition {
  auth: AuthToken;
  database: ResourcePermissionDefinition[];
}
