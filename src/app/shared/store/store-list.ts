import { HeroesState } from './heroes/heroes.state';
import { LoaderStatusState } from './loader-status/loader-status.state';
import { CurrentHeroState } from './current-hero/current-hero.state';
import { OptionalInfoForHeroState } from './optional-info-for-hero/optional-info-for-hero.state';

export const STORE_LIST = [HeroesState, LoaderStatusState, CurrentHeroState, OptionalInfoForHeroState];
