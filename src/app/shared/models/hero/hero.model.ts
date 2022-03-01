import { HeroImageModel } from './hero-image.model';

export interface HeroModel {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: HeroImageModel;
  comics: any;
  events: any;
  resourceURI: string;
  series: any;
  stories: any;
  urls: any;
}
