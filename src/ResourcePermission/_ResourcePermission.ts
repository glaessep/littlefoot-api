import { ResourcePermissionDefinition } from './ResourcePermissionDefinition';
import { ResourcePermissionMode } from './ResourcePermissionMode';

export class ResourcePermission implements ResourcePermissionDefinition {
  constructor(
    readonly id: string,
    readonly permissionMode: ResourcePermissionMode,
    readonly resource: string,
    readonly resourcePartitionKey: string | any[], // eslint-disable-line @typescript-eslint/no-explicit-any
    readonly token: string,
  ) {}
}
