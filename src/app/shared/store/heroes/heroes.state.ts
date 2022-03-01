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

  @Action(SetHeroes)
  public setHeroes({ setState }: StateContext<HeroModel[]>, { heroes }: SetHeroes): void {
    setState(heroes);
  }
}
