import { environment } from '../../../environments/environment';

export class Urls {
  public static getHeroes = (offset: number = 0): string =>
    `${environment.baseUrl}?limit=20&offset=${offset}&apikey=${environment.apiKey}`;

  public static getHero = (id: number): string => `${environment.baseUrl}/${id}?apikey=${environment.apiKey}`;

  public static getComics = (id: number): string => `${environment.baseUrl}/${id}/comics?apikey=${environment.apiKey}`;

  public static getSeries = (id: number): string => `${environment.baseUrl}/${id}/series?apikey=${environment.apiKey}`;

  public static getStories = (id: number): string =>
    `${environment.baseUrl}/${id}/stories?apikey=${environment.apiKey}`;

  public static getEvents = (id: number): string => `${environment.baseUrl}/${id}/events?apikey=${environment.apiKey}`;
}
