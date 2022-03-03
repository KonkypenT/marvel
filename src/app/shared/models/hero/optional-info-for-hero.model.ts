import { CardInfoModel } from './card-info.model';

export interface OptionalInfoForHeroModel {
  comics: CardInfoModel[] | null;
  series: CardInfoModel[] | null;
}
