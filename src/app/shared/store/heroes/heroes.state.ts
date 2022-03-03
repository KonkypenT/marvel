import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetHeroes } from './heroes.action';
import { CardInfoModel } from '../../models/hero/card-info.model';

@Injectable()
@State<CardInfoModel[]>({
  name: 'heroes',
  defaults: [],
})
export class HeroesState {
  @Selector()
  public static getHeroes(state: CardInfoModel[]): CardInfoModel[] {
    return state;
  }

  @Selector()
  public static getCountHeroes(state: CardInfoModel[]): number {
    return state.length;
  }

  @Action(SetHeroes)
  public setHeroes({ setState, getState }: StateContext<CardInfoModel[]>, { heroes }: SetHeroes): void {
    const partialHeroes = heroes.map((a) => {
      return { id: a.id, title: a.name, description: a.description, thumbnail: a.thumbnail };
    });
    const unionArrays = getState().concat(partialHeroes);
    const arr = unionArrays.filter((c, i, a) => a.findIndex((card) => card.id === c.id) === i);

    setState([...arr]);
  }
}
