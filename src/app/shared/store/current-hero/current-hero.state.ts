import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ResetCurrentHero, SetCurrentHero } from './current-hero.action';
import { CardInfoModel } from '../../models/hero/card-info.model';

@Injectable()
@State<CardInfoModel | null>({
  name: 'currentHero',
  defaults: null,
})
export class CurrentHeroState {
  @Selector()
  public static getCurrentHero(state: CardInfoModel): CardInfoModel {
    return state;
  }

  @Selector()
  public static getCurrentHeroName(state: CardInfoModel): string {
    return state.title;
  }

  @Selector()
  public static getCurrentHeroId(state: CardInfoModel): number {
    return state.id;
  }

  @Action(SetCurrentHero)
  public setCurrentHero({ setState }: StateContext<CardInfoModel>, { hero }: SetCurrentHero): void {
    setState(hero);
  }

  @Action(ResetCurrentHero)
  public resetCurrentHero({ setState }: StateContext<CardInfoModel | null>): void {
    setState(null);
  }
}
