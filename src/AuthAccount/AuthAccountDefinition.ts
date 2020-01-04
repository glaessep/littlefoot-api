export class AuthAccountDefinition {
  constructor(
    readonly versoin: number,
    readonly email: string,
    emailVerified: boolean,
    readonly verifySecret: string,
    readonly encrypted: string,
    readonly userId: string,
  ) {}
}
