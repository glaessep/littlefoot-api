export interface AuthAccountDefinition {
  versoin: number;
  email: string;
  emailVerified: boolean;
  verifySecret: string;
  encrypted: string;
  userId: string;

  // constructor(
  //   versoin: number,
  //   email: string,
  //   emailVerified: boolean,
  //   verifySecret: string,
  //   encrypted: string,
  //   userId: string,
  // ) {}
}
