import { Schema, Mongoose, Document, Model } from 'mongoose';
import CommonSchemaClass, { ModelExt } from '../../methods/shared.methods.class';
import { ShortLocationTwoSchema } from '../locationTwo/locationTwo.schema';
import LocationZoneDetailAttributes from "./locationZoneDetail.entity";

export type LocationZoneDetailModelExt<T> = ModelExt<T>;

export type LocationZoneDetailDocument = Document & LocationZoneDetailAttributes;

export const ShortLocationZoneDetailSchema = new Schema({
  _id: Schema.Types.ObjectId,
  code: String,
  locationTwo: ShortLocationTwoSchema
});

export const LocationZoneDetailSchema: Schema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    code: { type: String, required: true },
    locationTwo: { type: ShortLocationTwoSchema, required: true },
    active: { type: String, default: '1', },
    _deleted: { type: Boolean, default: false },
    _deletedAt: { type: Date },
    enabled: { type: Boolean, default: true },
    createdBy: String,
    updatedBy: String
  },
  { timestamps: true },
);

LocationZoneDetailSchema.statics.getDocuments = CommonSchemaClass.getDocuments;
LocationZoneDetailSchema.statics.getDocument = CommonSchemaClass.getDocument;
LocationZoneDetailSchema.statics.getDocumentsCount = CommonSchemaClass.getDocumentsCount;
LocationZoneDetailSchema.statics.patchDocumentsBulk =
  CommonSchemaClass.patchDocumentsBulk;
LocationZoneDetailSchema.statics.getDocumentsWithCount =
  CommonSchemaClass.getDocumentsWithCount;
LocationZoneDetailSchema.statics.patchDocumentsBulk = CommonSchemaClass.createGenId;
LocationZoneDetailSchema.statics.patchDocumentsBulk =
  CommonSchemaClass.updateOneWithQuery;

const LocationZoneDetail = (mongoose: Mongoose) =>
  mongoose.model<LocationZoneDetailDocument>(
    'LocationZoneDetail',
    LocationZoneDetailSchema,
    'location-zone-detail',
  ) as Model<LocationZoneDetailDocument, Record<string, unknown>>;

export default LocationZoneDetail;
