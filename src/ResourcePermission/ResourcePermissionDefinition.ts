/**
 * Enum for permission mode values.
 */
export enum ResourcePermissionMode {
  /** Permission not valid. */
  None = 'none',
  /** Permission applicable for read operations only. */
  Read = 'read',
  /** Permission applicable for all operations. */
  All = 'all',
}

export interface ResourcePermissionDefinition {
  readonly id: string;
  readonly permissionMode: ResourcePermissionMode;
  readonly resource: string;
  readonly resourcePartitionKey: string | any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  readonly token: string;
}
