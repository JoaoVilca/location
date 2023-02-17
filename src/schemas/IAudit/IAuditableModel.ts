import mongoose from "mongoose";
import UserAttributes from "../user/user.attributes";

export class IAuditableModel {
  _id?: mongoose.Types.ObjectId;
  enabled?: boolean;
  active?: boolean;
  createdAt!: Date;
  updatedAt?: Date;
  createdBy?: Partial<UserAttributes>;
  updatedBy?: Partial<UserAttributes>;
}
