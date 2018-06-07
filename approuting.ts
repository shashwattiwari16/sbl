import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyNavComponent } from './my-nav/my-nav.component';
const routes: Routes = [
  { path: 'navbar', component: MyNavComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
