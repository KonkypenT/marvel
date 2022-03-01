import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { InterceptorHttpParams } from '../models/loader-interceptor/interceptor-http-params.model';
import { Store } from '@ngxs/store';
import { SetStatusLoader } from '../store/loader-status/loader-status.action';

/** Интерсептор для отображение лоадера */
@Injectable()
class LoaderInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!(req.params instanceof InterceptorHttpParams)) {
      return next.handle(req);
    }

    const preloaderRequest = req.params.interceptorConfig.loaderIsVisible;

    preloaderRequest && this.store.dispatch(new SetStatusLoader(true));

    return next.handle(req).pipe(
      finalize(() => {
        preloaderRequest && this.store.dispatch(new SetStatusLoader(false));
      }),
    );
  }
}

export const HttpLoaderInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoaderInterceptor,
  multi: true,
};
