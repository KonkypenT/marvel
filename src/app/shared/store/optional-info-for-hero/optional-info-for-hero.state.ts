import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CardInfoModel } from '../../models/hero/card-info.model';
import { OptionalInfoForHeroModel } from '../../models/hero/optional-info-for-hero.model';
import { ResetOptionalInfo, SetComics, SetSeries } from './optional-info-for-hero.action';

@Injectable()
@State<OptionalInfoForHeroModel>({
  name: 'optionalInfoForHero',
  defaults: {
    comics: null,
    series: null,
  },
})
export class OptionalInfoForHeroState {
  @Selector()
  public static getComics(state: OptionalInfoForHeroModel): CardInfoModel[] | null {
    return state.comics;
  }

  @Selector()
  public static getSeries(state: OptionalInfoForHeroModel): CardInfoModel[] | null {
    return state.series;
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

  @Action(SetSeries)
  public setSeries({ patchState }: StateContext<OptionalInfoForHeroModel>, { series }: SetSeries): void {
    const partialSeries = series.map((c) => {
      return { id: c.id, title: c.title, thumbnail: c.thumbnail };
    });

    patchState({
      series: partialSeries,
    });
  }

  @Action(ResetOptionalInfo)
  public resetOptionalInfo({ patchState }: StateContext<OptionalInfoForHeroModel>): void {
    patchState({ comics: null, series: null });
  }
}
