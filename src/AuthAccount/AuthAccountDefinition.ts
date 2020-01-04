export interface AuthAccountDefinition {
  readonly id?: string;
  readonly versoin: number;
  readonly email: string;
  readonly emailVerified: boolean;
  // readonly verifySecret: string;
  // readonly encrypted: string;
  readonly userId: string;
}
