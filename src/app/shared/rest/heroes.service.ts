import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../consts/urls';
import { ResponseBaseModel } from '../models/response-base.model';
import { HeroModel } from '../models/hero/hero.model';
import { InterceptorHttpParams } from '../models/loader-interceptor/interceptor-http-params.model';
import { InterceptorConfig } from '../models/loader-interceptor/interceptor-config.model';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  constructor(private httpClient: HttpClient) {}

  public getHeroes(): Observable<HeroModel[]> {
    const url = Urls.getHeroes();

    return this.httpClient
      .get<ResponseBaseModel<HeroModel>>(url, { params: new InterceptorHttpParams(new InterceptorConfig(true)) })
      .pipe(map((val) => val.data.results));
  }
}
