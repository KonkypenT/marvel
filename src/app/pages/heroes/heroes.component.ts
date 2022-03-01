import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroesService } from '../../shared/rest/heroes.service';
import { first, Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { HeroesState } from '../../shared/store/heroes/heroes.state';
import { SetHeroes } from '../../shared/store/heroes/heroes.action';
import { HeroModel } from '../../shared/models/hero/hero.model';
import { finalize } from 'rxjs/operators';

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

  constructor(private heroesService: HeroesService, private store: Store) {}

  public ngOnInit(): void {
    this.getHeroes();
  }

  public loadMoreData(): void {
    this.loaderIsVisible = true;
    const countHeroes = this.store.selectSnapshot(HeroesState.getCountHeroes);
    this.getHeroes(countHeroes);
  }

  public trackByFn(index: number): number {
    return index;
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
