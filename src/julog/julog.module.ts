import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JulogRoutingModule } from './julog-routing.module';
import { JulogComponent } from './julog.component';

@NgModule({
  declarations: [
    JulogComponent
  ],
  imports: [
    BrowserModule,
    JulogRoutingModule
  ],
  providers: [],
  bootstrap: [JulogComponent]
})
export class JulogModule { }
