import { ComicsInfoModel } from './comics-info.model';

export interface OptionalInfoForHeroModel {
  comics: ComicsInfoModel[] | null;
}
