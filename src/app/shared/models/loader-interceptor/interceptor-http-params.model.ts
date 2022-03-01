import { HttpParams } from '@angular/common/http';
import { InterceptorConfig } from './interceptor-config.model';

/** конфигурируем обработку ошибок в Interceptor через обертку параметров */
export class InterceptorHttpParams extends HttpParams {
  constructor(public interceptorConfig: InterceptorConfig, params?: { [param: string]: string | string[] }) {
    super({ fromObject: params });
  }
}
