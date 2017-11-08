import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VDiceComponent} from './vdice.component';
import {UtilModule} from '../util/util.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UtilModule
  ],
  declarations: [VDiceComponent],
  exports: [VDiceComponent]
})
export class VDiceModule {
}
