import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroesService } from '../../shared/rest/heroes.service';
import { first, Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { HeroesState } from '../../shared/store/heroes/heroes.state';
import { SetHeroes } from '../../shared/store/heroes/heroes.action';
import { HeroModel } from '../../shared/models/hero/hero.model';
import { finalize } from 'rxjs/operators';
import { SetCurrentHero } from '../../shared/store/current-hero/current-hero.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Компонент для отображения списка с героями */
export class HeroesComponent implements OnInit {
  @Select(HeroesState.getHeroes)
  public heroes$!: Observable<HeroModel[]>;

  public loaderIsVisible = false;

  constructor(private heroesService: HeroesService, private store: Store, private router: Router) {}

  public ngOnInit(): void {
    const heroes = this.store.selectSnapshot(HeroesState.getHeroes);
    !heroes?.length && this.getHeroes();
  }

  public loadMoreData(): void {
    this.loaderIsVisible = true;
    const countHeroes = this.store.selectSnapshot(HeroesState.getCountHeroes);
    this.getHeroes(countHeroes);
  }

  public trackByFn(index: number): number {
    return index;
  }

  public chooseHero(hero: HeroModel): void {
    this.store.dispatch(new SetCurrentHero(hero));
    this.router.navigate([`hero/${hero.id}`]);
  }

  private getHeroes(offset: number = 0): void {
    this.heroesService
      .getHeroes(offset)
      .pipe(
        first(),
        finalize(() => (this.loaderIsVisible = false)),
      )
      .subscribe((result) => this.store.dispatch([new SetHeroes(result)]));
  }
}
