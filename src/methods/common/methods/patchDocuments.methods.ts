import {Model, SaveOptions, Types} from "mongoose";
import {PatchBulkInterface} from "../interfaces/interfaces";
import {updateBulkActions} from "../enums/enums";
import UserAttributes from "../../../schemas/user/user.attributes";
import cleanDeep from "clean-deep";
import { CombinedFilter } from "@albatrosdeveloper/ave-utils-npm/lib/utils/query.util";
import { mapFindOptions } from "@albatrosdeveloper/ave-utils-npm/lib/utils/convertQueries";

/**
 * @class PatchDocumentsClass
 */
export class PatchDocumentsClass extends Model{
    /**
     * @description Patch documents in bulk
     * @param props
     */
    static patchDocumentsBulk(props: PatchBulkInterface[]) {
        const bulk: any = this.collection.initializeUnorderedBulkOp();
        props.forEach((prop) => {
            switch (prop.action) {
                case updateBulkActions.arrayFilters:
                    bulk
                        .find(prop.filters)
                        .arrayFilters(prop.arrayFilters)
                        .updateOne({ $set: prop.fields });
                    break;
                case updateBulkActions.updateOne:
                    bulk.find(prop.filters).updateOne({ $set: prop.fields });
                    break;
                case updateBulkActions.updateMany:
                    bulk.find(prop.filters).updateMany({ $set: prop.fields });
                    break;
                case updateBulkActions.replaceOne:
                    bulk.find(prop.filters).replaceOne(prop.fields);
                    break;
                case updateBulkActions.deleteOne:
                    bulk.find(prop.filters).deleteOne();
                    break;
                case updateBulkActions.deleteMany:
                    bulk.find(prop.filters).deleteMany();
                    break;
                case updateBulkActions.insertOne:
                    bulk.insert(prop.fields);
                    break;
                default:
                    break;
            }
        });
        return bulk.execute();
    }

    static createGenId(data: any, user?: any | UserAttributes, saveOptions?: SaveOptions) {
        !data._id && (data._id = new Types.ObjectId());
        data.created_by = user ?? data.created_by;
        data.updated_by = user ?? data.updated_by;
        return this.create(cleanDeep(data), saveOptions);
    }

    static updateOneWithQuery(props: CombinedFilter<any>, updateProperties: Record<string, any>, user?: string | UserAttributes){
        updateProperties.updated_by = user ?? updateProperties.updated_by;
        const { query } = mapFindOptions(props)
        return this.updateOne(query, updateProperties).exec();
    }
}
