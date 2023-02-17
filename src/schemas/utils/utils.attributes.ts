

import { ModelExt } from '../../methods/shared.methods.class';
import { IDeletableModel} from '../IDelete/IDelete.model';

export type UtilsModelExt<T> = ModelExt<T>

export default class UtilsAttributes extends IDeletableModel {
    enabled?: boolean;
    store!: string;
    key!: string;
    value?: string | any;
    metadata?: any;
}
