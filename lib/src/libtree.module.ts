import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibtreeComponent } from './components/libtree.component'
import { FormsModule } from '@angular/forms';
import { ChangeThemeWhenHoverDirective } from './directives/change-theme-hover.directive';
import { LibtreeUtil } from './utils/libtree.util';



@NgModule({
  declarations: [LibtreeComponent,ChangeThemeWhenHoverDirective],
  imports: [CommonModule, FormsModule],
  exports: [LibtreeComponent],
  providers: [LibtreeUtil]
})
export class LibTreeModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: LibtreeModule,
  //     providers: []
  //   };
  // }
}