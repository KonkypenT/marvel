import { ComicsInfoModel } from '../../models/hero/comics-info.model';

/** Сохранить комиксы */
export class SetComics {
  public static readonly type = '[Optional Info] Set Comics';
  constructor(public comics: ComicsInfoModel[]) {}
}
