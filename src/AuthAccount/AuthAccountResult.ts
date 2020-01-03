import { Result, Id } from '../base';
import { AuthAccount } from './AuthAccount';
export class AuthAccountResult extends Result<AuthAccount & Id> {}
