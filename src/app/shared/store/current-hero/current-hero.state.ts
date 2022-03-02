import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { HeroModel } from '../../models/hero/hero.model';
import { ResetCurrentHero, SetCurrentHero } from './current-hero.action';

@Injectable()
@State<HeroModel | null>({
  name: 'currentHero',
  defaults: null,
})
export class CurrentHeroState {
  @Selector()
  public static getCurrentHero(state: HeroModel): HeroModel {
    return state;
  }

  @Selector()
  public static getCurrentHeroName(state: HeroModel): string {
    return state.name;
  }

  @Selector()
  public static getCurrentHeroId(state: HeroModel): number {
    return state.id;
  }

  @Action(SetCurrentHero)
  public setCurrentHero({ setState }: StateContext<HeroModel>, { hero }: SetCurrentHero): void {
    setState(hero);
  }

  @Action(ResetCurrentHero)
  public resetCurrentHero({ setState }: StateContext<HeroModel | null>): void {
    setState(null);
  }
}
