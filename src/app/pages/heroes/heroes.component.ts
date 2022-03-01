import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroesService } from '../../shared/rest/heroes.service';
import { first, Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { HeroesState } from '../../shared/store/heroes/heroes.state';
import { SetHeroes } from '../../shared/store/heroes/heroes.action';
import { HeroModel } from '../../shared/models/hero/hero.model';

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

  constructor(private heroesService: HeroesService, private store: Store) {}

  public ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .pipe(first())
      .subscribe((result) => {
        console.log(result[0]);
        this.store.dispatch(new SetHeroes(result));
      });
  }
}
