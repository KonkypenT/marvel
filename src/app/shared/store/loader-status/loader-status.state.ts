import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetStatusLoader } from './loader-status.action';

@Injectable()
@State<boolean>({
  name: 'loaderStatus',
  defaults: true,
})
export class LoaderStatusState {
  @Selector()
  public static getLoaderStatus(state: boolean): boolean {
    return state;
  }

  @Action(SetStatusLoader)
  public setStatusLoader({ setState }: StateContext<boolean>, { status }: SetStatusLoader): void {
    setState(status);
  }
}
