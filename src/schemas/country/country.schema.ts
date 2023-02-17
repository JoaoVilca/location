import mongoose, { Schema, Mongoose, Document, Model } from 'mongoose';
import CountryAttributes from './country.entity';
import CommonSchemaClass, { ModelExt } from '../../methods/shared.methods.class';

export type CountryModelExt<T> = ModelExt<T>;

export type CountryDocument = Document & CountryAttributes;

export const ShortCountrySchema = new Schema({
  _id: Schema.Types.ObjectId,
  code: String,
  name: String,
  prefixNumber: String,
  timeZone: String
})
export const CountrySchema: Schema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    code: { type: String, require: true },
    name: { type: String, required: true },
    prefixNumber: { type: String, require: true },
    active: { type: String, default: '1' },
    timeZone: { type: String },
    _deletedAt: { type: Date },
    _deleted: { type: Boolean, default: false },
    createdBy: String,
    updatedBy: String,
    enabled: { type: Boolean, default: true },
    alphaCode: { type: String },
    alphaCode2: { type: String },
    numericCode: { type: Number },
  },
  { timestamps: true },
);

CountrySchema.statics.getDocuments = CommonSchemaClass.getDocuments;
CountrySchema.statics.getDocument = CommonSchemaClass.getDocument;
CountrySchema.statics.getDocumentsCount = CommonSchemaClass.getDocumentsCount;
CountrySchema.statics.patchDocumentsBulk = CommonSchemaClass.patchDocumentsBulk;
CountrySchema.statics.getDocumentsWithCount =
  CommonSchemaClass.getDocumentsWithCount;
CountrySchema.statics.patchDocumentsBulk = CommonSchemaClass.createGenId;
CountrySchema.statics.patchDocumentsBulk = CommonSchemaClass.updateOneWithQuery;

const Country = (mongoose: Mongoose) =>
  mongoose.model<CountryDocument>('Country', CountrySchema, 'countries') as Model<
    CountryDocument,
    Record<string, unknown>
  >;

export default Country;
