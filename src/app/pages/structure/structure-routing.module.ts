import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { StructureComponent } from './containers';

const routes: Routes = [
    {
      path: '',
      component : StructureComponent,
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  
  export class StructureRoutingModule {
  }