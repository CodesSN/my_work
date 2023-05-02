import { Component, ViewChild, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee.model';
import { UnsubscribeOnDestroyAdapter } from '../../UnsubscribeOnDestroyAdapter';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends UnsubscribeOnDestroyAdapter implements OnInit, OnChanges  {
  public filteredData:Employee[] = [];
  public searchValue = '';
  public pageSize = 5;
  public pageIndex = 0;
  @Input() title!:string;
  @Input() data!:Employee[];
  @Input() displayedColumns!: string[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public dataSource!: MatTableDataSource<Employee>;

  constructor(
    private dialog:MatDialog
  ){
    super();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Employee>(this.data);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes:SimpleChanges):void {
    if(this.data.length !== 0){
      this.dataSource.data = this.data;
    }
  }

  editModal(row:Employee): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        employee: row,
        action: 'edit'
      }
    });
    this.subs.sink = dialogRef.afterClosed().subscribe();
  }

  addModal(): void{
    const dialogRef = this.dialog.open(ModalComponent, {
      data:{
        employee:{
          name: "",
          address: "",
          phone: "",
          date: "",
          email: "",
        },
        action: 'add'
      }
    });
    this.subs.sink = dialogRef.afterClosed().subscribe();
  }

  searchFilter(){
    const filterValue = this.searchValue.trim().toLowerCase();
    if(filterValue === ''){
      this.dataSource.data = this.data;
    } else {
       this.dataSource.data = this.data.filter(element => {
        return element.name.toLowerCase().includes(this.searchValue);
       })
    }
  }

  loadPaginator(){
    this.dataSource.paginator = this.paginator;
  }

  pageEvent(e:PageEvent){
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.loadPaginator()
  }
}
