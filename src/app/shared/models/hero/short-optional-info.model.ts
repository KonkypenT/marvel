import { ItemOptionalInfoModel } from './item-optional-info.model';

export interface ShortOptionalInfoModel {
  available: number;
  collectionURI: string;
  items: ItemOptionalInfoModel[];
  returned: number;
}
