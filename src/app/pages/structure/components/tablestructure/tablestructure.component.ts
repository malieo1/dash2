import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablestructureDataSource, TablestructureItem } from './tablestructure-datasource';

@Component({
  selector: 'app-tablestructure',
  templateUrl: './tablestructure.component.html',
  styleUrls: ['./tablestructure.component.scss']
})
export class TablestructureComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TablestructureItem>;
  dataSource: TablestructureDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nom', 'description1','site', 'numero','actions'];

  ngOnInit() {
    this.dataSource = new TablestructureDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
