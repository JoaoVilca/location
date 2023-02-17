import { Schema, Mongoose, Document, Model } from 'mongoose';
import CommonSchemaClass, { ModelExt } from '../../methods/shared.methods.class';
import { ShortCountrySchema } from '../country/country.schema';
import LocationOneAttributes from "./locationOne.entity";

export type LocationOneModelExt<T> = ModelExt<T>;

export type LocationOneDocument = Document & LocationOneAttributes;

export const ShortLocationOneSchema = new Schema({
  _id: Schema.Types.ObjectId,
  code: String,
  name: String,
  country: ShortCountrySchema,
});

export const LocationOneSchema: Schema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    code: { type: String, required: true },
    name: { type: String, required: true },
    country: { type: ShortCountrySchema, required: true },
    active: { type: String, default: '1' },
    _deleted: { type: Boolean, default: false },
    _deletedAt: { type: Date },
    enabled: { type: Boolean, default: true },
    createdBy: String,
    updatedBy: String
  },
  { timestamps: true },
);

LocationOneSchema.statics.getDocuments = CommonSchemaClass.getDocuments;
LocationOneSchema.statics.getDocument = CommonSchemaClass.getDocument;
LocationOneSchema.statics.getDocumentsCount = CommonSchemaClass.getDocumentsCount;
LocationOneSchema.statics.patchDocumentsBulk =
  CommonSchemaClass.patchDocumentsBulk;
LocationOneSchema.statics.getDocumentsWithCount =
  CommonSchemaClass.getDocumentsWithCount;
LocationOneSchema.statics.patchDocumentsBulk = CommonSchemaClass.createGenId;
LocationOneSchema.statics.patchDocumentsBulk =
  CommonSchemaClass.updateOneWithQuery;

const LocationOne = (mongoose: Mongoose) =>
  mongoose.model<LocationOneDocument>(
    'LocationOne',
    LocationOneSchema,
    'location-one',
  ) as Model<LocationOneDocument, Record<string, unknown>>;

export default LocationOne;
