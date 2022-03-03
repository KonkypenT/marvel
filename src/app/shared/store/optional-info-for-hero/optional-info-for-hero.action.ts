import { CardInfoModel } from '../../models/hero/card-info.model';

/** Сохранить комиксы */
export class SetComics {
  public static readonly type = '[Optional Info] Set Comics';
  constructor(public comics: CardInfoModel[]) {}
}

/** Сбросить состояние Доп инфы */
export class ResetOptionalInfo {
  public static readonly type = '[Optional Info] Reset Optional Info';
}
