import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateComponent],
  imports: [CommonModule, FormsModule],
  exports: [TemplateComponent]
})
export class TemplateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TemplateModule,
      providers: []
    };
  }
}

