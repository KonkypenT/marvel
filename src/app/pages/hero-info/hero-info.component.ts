import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable, switchMap } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { CurrentHeroState } from '../../shared/store/current-hero/current-hero.state';
import { HeroesService } from '../../shared/rest/heroes.service';
import { SetCurrentHero } from '../../shared/store/current-hero/current-hero.action';
import { HeroModel } from '../../shared/models/hero/hero.model';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss'],
})
/** Компонент для отображения полной информации о герое */
export class HeroInfoComponent implements OnInit {
  @Select(CurrentHeroState.getCurrentHero)
  public currentHero$!: Observable<HeroModel>;

  constructor(private route: ActivatedRoute, private store: Store, private heroesService: HeroesService) {}

  public ngOnInit(): void {
    this.eventForRoute();
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
        this.store.dispatch(new SetCurrentHero(result[0]));
      });
  }
}
