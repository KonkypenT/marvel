import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CardInfoModel } from '../../models/hero/card-info.model';
import { OptionalInfoForHeroModel } from '../../models/hero/optional-info-for-hero.model';
import { ResetOptionalInfo, SetComics, SetEvents, SetSeries, SetStories } from './optional-info-for-hero.action';

@Injectable()
@State<OptionalInfoForHeroModel>({
  name: 'optionalInfoForHero',
  defaults: {
    comics: null,
    series: null,
    stories: null,
    events: null,
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

  @Selector()
  public static getStories(state: OptionalInfoForHeroModel): CardInfoModel[] | null {
    return state.stories;
  }

  @Selector()
  public static getEvents(state: OptionalInfoForHeroModel): CardInfoModel[] | null {
    return state.events;
  }

  @Action(SetComics)
  public setComics({ patchState }: StateContext<OptionalInfoForHeroModel>, { comics }: SetComics): void {
    const partialComics: CardInfoModel[] = comics.map((c) => {
      return { id: c.id, title: c.title, thumbnail: c.thumbnail };
    });

    patchState({
      comics: partialComics,
    });
  }

  @Action(SetSeries)
  public setSeries({ patchState }: StateContext<OptionalInfoForHeroModel>, { series }: SetSeries): void {
    const partialSeries: CardInfoModel[] = series.map((c) => {
      return { id: c.id, title: c.title, thumbnail: c.thumbnail };
    });

    patchState({
      series: partialSeries,
    });
  }

  @Action(SetStories)
  public setStories({ patchState }: StateContext<OptionalInfoForHeroModel>, { stories }: SetStories): void {
    const partialStories: CardInfoModel[] = stories.map((c) => {
      return { id: c.id, title: c.title, thumbnail: c.thumbnail, description: c.description };
    });

    patchState({
      stories: partialStories,
    });
  }

  @Action(SetEvents)
  public setEvents({ patchState }: StateContext<OptionalInfoForHeroModel>, { events }: SetEvents): void {
    const partialEvents: CardInfoModel[] = events.map((c) => {
      return { id: c.id, title: c.title, thumbnail: c.thumbnail, description: c.description };
    });

    patchState({
      events: partialEvents,
    });
  }

  @Action(ResetOptionalInfo)
  public resetOptionalInfo({ patchState }: StateContext<OptionalInfoForHeroModel>): void {
    patchState({ comics: null, series: null, stories: null, events: null });
  }
}
