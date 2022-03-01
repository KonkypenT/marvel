import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetHeroes } from './heroes.action';
import { HeroModel } from '../../models/hero/hero.model';

@Injectable()
@State<HeroModel[]>({
  name: 'heroes',
  defaults: [],
})
export class HeroesState {
  @Selector()
  public static getHeroes(state: HeroModel[]): HeroModel[] {
    return state;
  }

  @Selector()
  public static getCountHeroes(state: HeroModel[]): number {
    return state.length;
  }

  @Action(SetHeroes)
  public setHeroes({ setState, getState }: StateContext<HeroModel[]>, { heroes }: SetHeroes): void {
    const unionArrays = getState().concat(heroes);
    const arr = unionArrays.filter((c, i, a) => a.findIndex((card) => card.id === c.id) === i);
    setState([...arr]);
  }
}
