import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

import { StructureComponent } from './containers';
import { TablestructureComponent } from './components';
import { StructureRoutingModule } from './structure-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';





@NgModule({
    declarations: [
        StructureComponent ,
        TablestructureComponent
    ],
    imports: [
      CommonModule,
      StructureRoutingModule ,
      MatCardModule,
      MatIconModule,
      MatMenuModule,
      MatTableModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatIconModule,
      SharedModule
    ],
    providers: [
    ]
  })
  export class StructureModule { }