import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CardInfoModel } from '../../models/hero/card-info.model';
import { OptionalInfoForHeroModel } from '../../models/hero/optional-info-for-hero.model';
import { ResetOptionalInfo, SetComics } from './optional-info-for-hero.action';

@Injectable()
@State<OptionalInfoForHeroModel>({
  name: 'optionalInfoForHero',
  defaults: {
    comics: null,
  },
})
export class OptionalInfoForHeroState {
  @Selector()
  public static getComics(state: OptionalInfoForHeroModel): CardInfoModel[] | null {
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

  @Action(ResetOptionalInfo)
  public resetOptionalInfo({ patchState }: StateContext<OptionalInfoForHeroModel>): void {
    patchState({ comics: null });
  }
}
