import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';



@NgModule({
  declarations: [YesNoButtonGroupComponent],
  exports:[YesNoButtonGroupComponent],
  imports: [
    CommonModule
  ]
})
export class YesNoButtonGroupModule { }
