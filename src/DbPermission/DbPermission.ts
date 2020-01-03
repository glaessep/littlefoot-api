import { DbPermissionDefinition } from './DbPermissionDefinition';
import { DbPermissionMode } from './DbPermissionMode';

export class DbPermission extends DbPermissionDefinition {
  constructor(
    readonly id: string,
    readonly permissionMode: DbPermissionMode,
    readonly resource: string,
    readonly resourcePartitionKey: string | any[], // eslint-disable-line @typescript-eslint/no-explicit-any
    readonly token: string,
  ) {
    super(id, permissionMode, resource, resourcePartitionKey);
  }
}
