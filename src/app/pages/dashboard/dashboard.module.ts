import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './container';
import { SharedModule } from 'src/app/shared/shared.module'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatExpansionModule,
        MatSortModule,
        MatCheckboxModule,
        MatToolbarModule
     ],
    exports : [
        HomeComponent
    ]
})
export class DashboardModule {}