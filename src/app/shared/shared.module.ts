import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { COMPONENTS } from './components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpLoaderInterceptorProvider } from './interceptors/loader.interceptor';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  providers: [HttpLoaderInterceptorProvider],
})
export class SharedModule {}
