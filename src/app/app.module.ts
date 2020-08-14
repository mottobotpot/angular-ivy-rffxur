import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';

import { AppComponent } from './app.component';
import { AnpiBodyComponent } from './anpi-body.component';
import { AnpiHeaderComponent } from './anpi-header.component';
import { AnpiFooterComponent } from './anpi-footer.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [ 
    AppComponent, 
    AnpiBodyComponent, 
    AnpiHeaderComponent, 
    AnpiFooterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
