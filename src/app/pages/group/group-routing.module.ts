import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { GroupComponent } from './containers';

const routes: Routes = [
    {
      path: '',
      component : GroupComponent,
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  
  export class GroupRoutingModule {
  }