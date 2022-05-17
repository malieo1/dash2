import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/dashboard/container';


const routes: Routes = [
  { path: 'dashboard',
   pathMatch: 'full',
   component: HomeComponent 
  },
  { path: 'employee',
  pathMatch: 'full',
  loadChildren:() =>import ('./pages/employee/employee.module').then(m => m.EmployeeModule)
  },
  { path: 'group',
  pathMatch: 'full',
  loadChildren:() =>import ('./pages/group/group.module').then(m => m.GroupModule)
  },
  { path: 'structure',
  pathMatch: 'full',
  loadChildren:() =>import ('./pages/structure/structure.module').then(m => m.StructureModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
