import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateModule } from '../../lib/src/template.module';
import { LibtreeComponent } from './components/libtree.component';


@NgModule({
  declarations: [
    AppComponent,
    LibtreeComponent,
  ],
  imports: [
    BrowserModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
