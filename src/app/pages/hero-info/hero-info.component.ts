import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, first, Observable, switchMap } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { CurrentHeroState } from '../../shared/store/current-hero/current-hero.state';
import { HeroesService } from '../../shared/rest/heroes.service';
import { SetCurrentHero } from '../../shared/store/current-hero/current-hero.action';
import { OptionalInfoForHeroState } from '../../shared/store/optional-info-for-hero/optional-info-for-hero.state';
import {
  SetComics,
  SetEvents,
  SetSeries,
  SetStories,
} from '../../shared/store/optional-info-for-hero/optional-info-for-hero.action';
import { CardInfoModel } from '../../shared/models/hero/card-info.model';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss'],
})
/** Компонент для отображения полной информации о герое */
export class HeroInfoComponent implements OnInit {
  @Select(CurrentHeroState.getCurrentHero)
  public currentHero$!: Observable<CardInfoModel | null>;

  @Select(OptionalInfoForHeroState.getComics)
  public comics$!: Observable<CardInfoModel[] | null>;

  @Select(OptionalInfoForHeroState.getSeries)
  public series$!: Observable<CardInfoModel[] | null>;

  @Select(OptionalInfoForHeroState.getStories)
  public stories$!: Observable<CardInfoModel[] | null>;

  @Select(OptionalInfoForHeroState.getEvents)
  public events$!: Observable<CardInfoModel[] | null>;

  constructor(private route: ActivatedRoute, private store: Store, private heroesService: HeroesService) {}

  public ngOnInit(): void {
    this.eventForRoute();
  }

  public openComics(): void {
    const comics = this.store.selectSnapshot(OptionalInfoForHeroState.getComics);
    const id = this.store.selectSnapshot(CurrentHeroState.getCurrentHeroId);

    if (comics?.length) {
      return;
    }

    this.heroesService
      .getComics(id)
      .pipe(first())
      .subscribe((result) => this.store.dispatch(new SetComics(result)));
  }

  public openSeries(): void {
    const series = this.store.selectSnapshot(OptionalInfoForHeroState.getSeries);
    const id = this.store.selectSnapshot(CurrentHeroState.getCurrentHeroId);

    if (series?.length) {
      return;
    }

    this.heroesService
      .getSeries(id)
      .pipe(first())
      .subscribe((result) => this.store.dispatch(new SetSeries(result)));
  }

  public openStories(): void {
    const stories = this.store.selectSnapshot(OptionalInfoForHeroState.getStories);
    const id = this.store.selectSnapshot(CurrentHeroState.getCurrentHeroId);

    if (stories?.length) {
      return;
    }

    this.heroesService
      .getStories(id)
      .pipe(first())
      .subscribe((result) => this.store.dispatch(new SetStories(result)));
  }

  public openEvents(): void {
    const events = this.store.selectSnapshot(OptionalInfoForHeroState.getEvents);
    const id = this.store.selectSnapshot(CurrentHeroState.getCurrentHeroId);

    if (events?.length) {
      return;
    }

    this.heroesService
      .getEvents(id)
      .pipe(first())
      .subscribe((result) => this.store.dispatch(new SetEvents(result)));
  }

  private eventForRoute(): void {
    const currentHero = this.store.selectSnapshot(CurrentHeroState.getCurrentHero);

    if (currentHero) {
      return;
    }

    this.route.paramMap
      .pipe(
        switchMap((p) => this.heroesService.getHero(Number(p.get('id')))),
        filter((heroes) => !!heroes?.length),
      )
      .subscribe((result) => {
        const partialHero: CardInfoModel = {
          id: result[0].id,
          title: result[0].name,
          description: result[0].description,
          thumbnail: result[0].thumbnail,
        };
        this.store.dispatch(new SetCurrentHero(partialHero));
      });
  }
}
