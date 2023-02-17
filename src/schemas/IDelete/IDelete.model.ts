import { IAuditableModel } from '../IAudit/IAuditableModel';

export class IDeletableModel extends IAuditableModel {
  _deleted!: boolean;
  _deletedAt?: Date;
}
