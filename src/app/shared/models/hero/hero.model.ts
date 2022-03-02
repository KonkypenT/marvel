import { ImageModel } from './image.model';
import { ShortOptionalInfoModel } from './short-optional-info.model';
import { UrlModel } from './url.model';

export interface HeroModel {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: ImageModel;
  comics: ShortOptionalInfoModel[];
  events: ShortOptionalInfoModel[];
  resourceURI: string;
  series: ShortOptionalInfoModel[];
  stories: ShortOptionalInfoModel[];
  urls: UrlModel[];
}
