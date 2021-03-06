import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../consts/urls';
import { HeroModel } from '../models/hero/hero.model';
import { InterceptorHttpParams } from '../models/loader-interceptor/interceptor-http-params.model';
import { InterceptorConfig } from '../models/loader-interceptor/interceptor-config.model';
import { ResponseBaseModel } from '../models/response-base.model';
import { CardInfoModel } from '../models/hero/card-info.model';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  constructor(private httpClient: HttpClient) {}

  public getHeroes(offset: number = 0): Observable<HeroModel[]> {
    const url = Urls.getHeroes(offset);

    return this.httpClient
      .get<ResponseBaseModel<HeroModel>>(url, { params: new InterceptorHttpParams(new InterceptorConfig(true)) })
      .pipe(map((val) => val.data.results));
  }

  public getHero(id: number): Observable<HeroModel[]> {
    const url = Urls.getHero(id);

    return this.httpClient
      .get<ResponseBaseModel<HeroModel>>(url, { params: new InterceptorHttpParams(new InterceptorConfig(true)) })
      .pipe(map((val) => val.data.results));
  }

  public getComics(id: number): Observable<CardInfoModel[]> {
    const url = Urls.getComics(id);

    return this.httpClient.get<ResponseBaseModel<CardInfoModel>>(url).pipe(map((val) => val.data.results));
  }

  public getSeries(id: number): Observable<CardInfoModel[]> {
    const url = Urls.getSeries(id);

    return this.httpClient.get<ResponseBaseModel<CardInfoModel>>(url).pipe(map((val) => val.data.results));
  }

  public getStories(id: number): Observable<CardInfoModel[]> {
    const url = Urls.getStories(id);

    return this.httpClient.get<ResponseBaseModel<CardInfoModel>>(url).pipe(map((val) => val.data.results));
  }

  public getEvents(id: number): Observable<CardInfoModel[]> {
    const url = Urls.getEvents(id);

    return this.httpClient.get<ResponseBaseModel<CardInfoModel>>(url).pipe(map((val) => val.data.results));
  }
}
