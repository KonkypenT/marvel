import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from './shared/shared.module';
import { HeroesModule } from './pages/heroes/heroes.module';
import { NgxsModule } from '@ngxs/store';
import { STORE_LIST } from './shared/store/store-list';
import { environment } from '../environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HttpClientModule } from '@angular/common/http';
import { HeroInfoModule } from './pages/hero-info/hero-info.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HeroesModule,
    HeroInfoModule,
    MatProgressBarModule,
    NgxsModule.forRoot(STORE_LIST, { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
