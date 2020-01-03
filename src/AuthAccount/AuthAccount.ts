import { AuthAccountDefinition } from './AuthAccountDefinition';
import uuid4 from 'uuid/v4';

export class AuthAccount extends AuthAccountDefinition {
  constructor(email: string, encrypted: string, userId: string, emailVerified = false) {
    super(AuthAccount.version(), email, emailVerified, uuid4(), encrypted, userId);
  }
  static version(): number {
    return 1;
  }
}
