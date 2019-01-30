import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateModule } from '../../lib/src/template.module';
import { LibtreeComponent } from './components/libtree.component';
import { ChangeThemeWhenHoverDirective } from './directives/change-theme-hover.directive';



@NgModule({
  declarations: [
    AppComponent,
    LibtreeComponent,
    ChangeThemeWhenHoverDirective,
  ],
  imports: [
    BrowserModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
