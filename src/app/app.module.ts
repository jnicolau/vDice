import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import {MetaModule} from './meta/meta.module';
import {VDiceModule} from './vdice/vdice.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   // MetaModule,
    VDiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
