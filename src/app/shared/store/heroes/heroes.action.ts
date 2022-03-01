import { HeroModel } from '../../models/hero/hero.model';

/** Сохранить героев в стейт */
export class SetHeroes {
  public static readonly type = '[Heroes] Set Heroes';
  constructor(public heroes: HeroModel[]) {}
}
