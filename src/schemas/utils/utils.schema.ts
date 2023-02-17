import { Schema, Mongoose, Document, Model } from 'mongoose';

import UtilAttributes from './utils.attributes';
import CommonSchemaClass from '../../methods/shared.methods.class';

export type UtilsDocument = Document & UtilAttributes;

export const UtilsSchema: Schema = new Schema(
    {
        store: { type: String, required: true },
        key: { type: String, required: true },
        enabled: { type: Boolean, default: true },
        value: Schema.Types.Mixed,
        metadata: Schema.Types.Mixed
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

UtilsSchema.index({ store: -1, key: -1 }, { unique: true });

UtilsSchema.statics.getDocuments = CommonSchemaClass.getDocuments;
UtilsSchema.statics.getDocument = CommonSchemaClass.getDocument;
UtilsSchema.statics.getDocumentsCount = CommonSchemaClass.getDocumentsCount;
UtilsSchema.statics.patchDocumentsBulk = CommonSchemaClass.patchDocumentsBulk;
UtilsSchema.statics.getDocumentsWithCount = CommonSchemaClass.getDocumentsWithCount;
UtilsSchema.statics.createGenId = CommonSchemaClass.createGenId;
UtilsSchema.statics.updateOneWithQuery = CommonSchemaClass.updateOneWithQuery;
const Utils = (mongoose: Mongoose) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    mongoose.model<UtilsDocument>(
        'Util',
        UtilsSchema,
        'util'
    ) as Model<UtilsDocument, Record<string, unknown>>;

export default Utils;
