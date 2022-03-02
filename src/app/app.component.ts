import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LoaderStatusState } from './shared/store/loader-status/loader-status.state';
import { Observable } from 'rxjs';
import { CurrentHeroState } from './shared/store/current-hero/current-hero.state';
import { Router } from '@angular/router';
import { ResetCurrentHero } from './shared/store/current-hero/current-hero.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(LoaderStatusState.getLoaderStatus)
  public loaderStatus$!: Observable<boolean>;

  @Select(CurrentHeroState.getCurrentHeroName)
  public currentHeroName$!: Observable<string>;

  constructor(private router: Router, private store: Store) {}

  public goToMainPage(): void {
    this.store.dispatch(ResetCurrentHero);
    this.router.navigate(['heroes']);
  }
}
