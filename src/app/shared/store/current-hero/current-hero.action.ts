import { HeroModel } from '../../models/hero/hero.model';

/** Сохранить текущего героя в стейт */
export class SetCurrentHero {
  public static readonly type = '[Current Hero] Set Current Hero';
  constructor(public hero: HeroModel) {}
}

/** Сбросить текущего героя из стейта */
export class ResetCurrentHero {
  public static readonly type = '[Current Hero] Reset Current Hero';
}
