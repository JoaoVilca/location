import {
  DocumentWithCountInterface,
  PatchBulkInterface,
} from './common/interfaces/interfaces';
import {AggregateOptions, DocumentSetOptions, LeanDocument, Model, SaveOptions} from 'mongoose';
import { BulkWriteResult } from 'mongodb';
import { GetDocumentsClass } from './common/methods/getDocuments.methods';
import { PatchDocumentsClass } from './common/methods/patchDocuments.methods';
import UserAttributes from "../schemas/user/user.attributes";
import { CombinedFilter } from '@albatrosdeveloper/ave-utils-npm/lib/utils/query.util';

export interface ModelExt<T> extends Model<T> {
  getDocuments: (props: CombinedFilter<any>, options?: DocumentSetOptions) => Promise<LeanDocument<any>[]>;
  getDocument: (props: CombinedFilter<any>, options?: DocumentSetOptions) => Promise<LeanDocument<any>>;
  getDocumentsCount: (props: CombinedFilter<any>, options?: DocumentSetOptions) => Promise<number>;
  patchDocumentsBulk: (data: PatchBulkInterface[]) => Promise<BulkWriteResult>;
  getDocumentsWithCount: (
      props: CombinedFilter<any>,
    options?: AggregateOptions
  ) => Promise<DocumentWithCountInterface>;

  createGenId(data: any, user?: any | UserAttributes, saveOptions?: SaveOptions): Promise<LeanDocument<any> | any>;
  updateOneWithQuery(query: CombinedFilter<any>, data: any, user?: any | UserAttributes, saveOptions?: SaveOptions): Promise<any>;
}

/**
 * @class CommonSchemaClass
 */
export default class CommonSchemaClass extends Model implements ModelExt<any> {
  /**
   * Get documents
   */
  static getDocuments = GetDocumentsClass.getDocuments;
  /**
   * Get document
   */
  static getDocument = GetDocumentsClass.getDocument;
  /**
   * Get documents count
   */
  static getDocumentsCount = GetDocumentsClass.getDocumentsCount;
  /**
   * Patch documents bulk
   * */
  static patchDocumentsBulk = PatchDocumentsClass.patchDocumentsBulk;
  /**
   * Get documents with count
   */
  static getDocumentsWithCount = GetDocumentsClass.getDocumentsWithCount;

  /**
   * Create document with genId
   */
  static createGenId = PatchDocumentsClass.createGenId;

  /**
   * Update one with query
   */
  static updateOneWithQuery = PatchDocumentsClass.updateOneWithQuery;
}
