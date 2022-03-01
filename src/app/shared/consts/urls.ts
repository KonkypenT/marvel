import { environment } from '../../../environments/environment';

export class Urls {
  public static getHeroes = (offset: number = 0): string =>
    `${environment.baseUrl}?limit=20&offset=${offset}&apikey=${environment.apiKey}`;
}
