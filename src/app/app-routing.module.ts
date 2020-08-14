import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnpiBodyComponent } from './anpi-body.component';

const routes: Routes = [
  { path: '', redirectTo: '/anpi-body', pathMatch: 'full' },
  { path: 'anpi-body', component: AnpiBodyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/