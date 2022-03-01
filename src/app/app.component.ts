import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { LoaderStatusState } from './shared/store/loader-status/loader-status.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(LoaderStatusState.getLoaderStatus)
  public loaderStatus$!: Observable<boolean>;
}
