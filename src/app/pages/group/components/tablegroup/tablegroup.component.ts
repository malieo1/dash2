import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablegroupDataSource, TablegroupItem } from './tablegroup-datasource';

@Component({
  selector: 'app-tablegroup',
  templateUrl: './tablegroup.component.html',
  styleUrls: ['./tablegroup.component.scss']
})
export class TablegroupComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TablegroupItem>;
  dataSource: TablegroupDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nomG', 'description','actions'];

  ngOnInit() {
    this.dataSource = new TablegroupDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
