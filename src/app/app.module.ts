import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnpiBodyComponent } from './anpi-body.component';
import { AnpiHeaderComponent } from './anpi-header.component';
import { AnpiFooterComponent } from './anpi-footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnpiBodyComponent, AnpiHeaderComponent, AnpiFooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
