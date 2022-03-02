import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, first, Observable, switchMap } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { CurrentHeroState } from '../../shared/store/current-hero/current-hero.state';
import { HeroesService } from '../../shared/rest/heroes.service';
import { SetCurrentHero } from '../../shared/store/current-hero/current-hero.action';
import { HeroModel } from '../../shared/models/hero/hero.model';
import { OptionalInfoForHeroState } from '../../shared/store/optional-info-for-hero/optional-info-for-hero.state';
import { SetComics } from '../../shared/store/optional-info-for-hero/optional-info-for-hero.action';
import { ComicsInfoModel } from '../../shared/models/hero/comics-info.model';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss'],
})
/** Компонент для отображения полной информации о герое */
export class HeroInfoComponent implements OnInit {
  @Select(CurrentHeroState.getCurrentHero)
  public currentHero$!: Observable<HeroModel | null>;

  @Select(OptionalInfoForHeroState.getComics)
  public comics$!: Observable<ComicsInfoModel[] | null>;

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
      .subscribe((result) => this.store.dispatch(new SetCurrentHero(result[0])));
  }
}
