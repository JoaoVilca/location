import { Schema, Mongoose, Document, Model } from 'mongoose';
import CommonSchemaClass, { ModelExt } from '../../methods/shared.methods.class';
import LocationZoneAttributes from "./locationZone.entity";
import { ShortLocationOneSchema } from '../locationOne/locationOne.schema';

export type LocationZoneModelExt<T> = ModelExt<T>;

export type LocationZoneDocument = Document & LocationZoneAttributes;

export const ShortLocationZoneSchema = new Schema({
  _id: Schema.Types.ObjectId,
  code: String,
  name: String,
  cost: String,
  level: String
});

export const LocationZoneSchema: Schema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    code: { type: String, required: true },
    name: { type: String, required: true },
    cost: { type: String, required: true },
    level: { type: String, required: true },
    active: { type: String, default: '1', },
    _deleted: { type: Boolean, default: false },
    _deletedAt: { type: Date },
    enabled: { type: Boolean, default: true },
    createdBy: String,
    updatedBy: String
  },
  { timestamps: true },
);

LocationZoneSchema.statics.getDocuments = CommonSchemaClass.getDocuments;
LocationZoneSchema.statics.getDocument = CommonSchemaClass.getDocument;
LocationZoneSchema.statics.getDocumentsCount = CommonSchemaClass.getDocumentsCount;
LocationZoneSchema.statics.patchDocumentsBulk =
  CommonSchemaClass.patchDocumentsBulk;
LocationZoneSchema.statics.getDocumentsWithCount =
  CommonSchemaClass.getDocumentsWithCount;
LocationZoneSchema.statics.patchDocumentsBulk = CommonSchemaClass.createGenId;
LocationZoneSchema.statics.patchDocumentsBulk =
  CommonSchemaClass.updateOneWithQuery;

const LocationZone = (mongoose: Mongoose) =>
  mongoose.model<LocationZoneDocument>(
    'LocationZone',
    LocationZoneSchema,
    'location-zone',
  ) as Model<LocationZoneDocument, Record<string, unknown>>;

export default LocationZone;
