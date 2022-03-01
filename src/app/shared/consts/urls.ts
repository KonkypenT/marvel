import { environment } from '../../../environments/environment';

export class Urls {
  public static getHeroes = (): string => `${environment.baseUrl}?apikey=${environment.apiKey}`;
}
