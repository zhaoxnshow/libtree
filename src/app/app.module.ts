import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibTreeModule } from '../../lib/src/libtree.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LibTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
