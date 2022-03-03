import { CardInfoModel } from '../../models/hero/card-info.model';

/** Сохранить комиксы */
export class SetComics {
  public static readonly type = '[Optional Info] Set Comics';
  constructor(public comics: CardInfoModel[]) {}
}

/** Сохранить сериалы */
export class SetSeries {
  public static readonly type = '[Optional Info] Set Series';
  constructor(public series: CardInfoModel[]) {}
}

/** Сбросить состояние Доп инфы */
export class ResetOptionalInfo {
  public static readonly type = '[Optional Info] Reset Optional Info';
}
