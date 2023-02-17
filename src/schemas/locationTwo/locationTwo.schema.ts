import { Schema, Mongoose, Document, Model } from 'mongoose';
import CommonSchemaClass, { ModelExt } from '../../methods/shared.methods.class';
import LocationTwoAttributes from "./locationTwo.entity";
import { ShortLocationOneSchema } from '../locationOne/locationOne.schema';

export type LocationTwoModelExt<T> = ModelExt<T>;

export type LocationTwoDocument = Document & LocationTwoAttributes;

export const ShortLocationTwoSchema = new Schema({
  _id: Schema.Types.ObjectId,
  code: String,
  name: String,
  locationOne: ShortLocationOneSchema
});

export const LocationTwoSchema: Schema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    code: { type: String, required: true },
    name: { type: String, required: true },
    locationOne: { type: ShortLocationOneSchema, required: true },
    active: { type: String, default: '1', },
    _deleted: { type: Boolean, default: false },
    _deletedAt: { type: Date },
    enabled: { type: Boolean, default: true },
    createdBy: String,
    updatedBy: String
  },
  { timestamps: true },
);

LocationTwoSchema.statics.getDocuments = CommonSchemaClass.getDocuments;
LocationTwoSchema.statics.getDocument = CommonSchemaClass.getDocument;
LocationTwoSchema.statics.getDocumentsCount = CommonSchemaClass.getDocumentsCount;
LocationTwoSchema.statics.patchDocumentsBulk =
  CommonSchemaClass.patchDocumentsBulk;
LocationTwoSchema.statics.getDocumentsWithCount =
  CommonSchemaClass.getDocumentsWithCount;
LocationTwoSchema.statics.patchDocumentsBulk = CommonSchemaClass.createGenId;
LocationTwoSchema.statics.patchDocumentsBulk =
  CommonSchemaClass.updateOneWithQuery;

const LocationTwo = (mongoose: Mongoose) =>
  mongoose.model<LocationTwoDocument>(
    'LocationTwo',
    LocationTwoSchema,
    'location-two',
  ) as Model<LocationTwoDocument, Record<string, unknown>>;

export default LocationTwo;
