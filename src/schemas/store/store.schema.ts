import CommonSchemaClass from '../../methods/shared.methods.class';
// import StoreAttributes from '@albatrosdeveloper/ave-models-npm/lib/schemas/user/user.attributes';
import StoreAttributes from './store.entity';
import mongoose, { Schema, Mongoose, Document, Model } from 'mongoose';
import { ShortCountrySchema } from '../country/country.schema';

export type StoreDocument = Document & StoreAttributes;

export const ShortStoreSchema = new Schema({
    _id: Schema.Types.ObjectId,
    code: String,
    name: String,
    country: String,
    city: String,
    schedule: String,
    type_order: String,
    coordinates: String,
    address: String,
    phone: String,
    name_manager: String,
    photo_store: String
});

export const StoreSchema: Schema = new Schema(
    {
        _id: {
            type: Schema.Types.ObjectId
        },
        external_id: {
            type: String,
        },
        code: { type: String, required: false },
        name: { type: String, required: false },
        country: { type: ShortCountrySchema },
        city: { type: String, required: false },
        schedule: { type: String, required: false },
        type_order: { type: String, required: false },
        coordinates: { type: String, required: false },
        address: { type: String, required: false },
        phone: { type: String, required: false },
        name_manager: { type: String, required: false },
        photo_store: { type: String, required: false },
        _deleted: { type: Boolean, default: false },
        active: {
            type: Boolean,
            default: true,
        },
        created_at: Date,
        updated_at: Date,
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

StoreSchema.statics.getDocuments = CommonSchemaClass.getDocuments;
StoreSchema.statics.getDocument = CommonSchemaClass.getDocument;
StoreSchema.statics.getDocumentsCount = CommonSchemaClass.getDocumentsCount;
StoreSchema.statics.patchDocumentsBulk = CommonSchemaClass.patchDocumentsBulk;
StoreSchema.statics.getDocumentsWithCount =
    CommonSchemaClass.getDocumentsWithCount;
StoreSchema.statics.createGenId = CommonSchemaClass.createGenId;
StoreSchema.statics.updateOneWithQuery = CommonSchemaClass.getDocumentsWithCount;

const Store = (mongoose: Mongoose) =>
    mongoose.model<StoreDocument>('Store', StoreSchema, 'store') as Model<
        StoreDocument,
        Record<string, unknown>
    >;

export default Store;