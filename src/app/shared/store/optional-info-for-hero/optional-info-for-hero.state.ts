import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ComicsInfoModel } from '../../models/hero/comics-info.model';
import { OptionalInfoForHeroModel } from '../../models/hero/optional-info-for-hero.model';
import { SetComics } from './optional-info-for-hero.action';

@Injectable()
@State<OptionalInfoForHeroModel>({
  name: 'optionalInfoForHero',
  defaults: {
    comics: null,
  },
})
export class OptionalInfoForHeroState {
  @Selector()
  public static getComics(state: OptionalInfoForHeroModel): ComicsInfoModel[] | null {
    return state.comics;
  }

  @Action(SetComics)
  public setComics({ patchState }: StateContext<OptionalInfoForHeroModel>, { comics }: SetComics): void {
    const partialComics = comics.map((c) => {
      return { id: c.id, title: c.title, thumbnail: c.thumbnail };
    });

    patchState({
      comics: partialComics,
    });
  }
}
