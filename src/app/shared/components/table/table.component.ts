import { Component, ViewChild, Input, OnInit } from '@angular/core';
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
export class TableComponent extends UnsubscribeOnDestroyAdapter implements OnInit  {
  public filteredData:Employee[] = [];
  public searchValue = '';
  public pageSize = 5;
  public pageIndex = 0;
  @Input() data:Employee[] = [];
  @Input() displayedColumns!: string[];
  // public displayedColumns: string[] = ['name', 'address', 'phone', 'email', 'options'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public dataSource!: MatTableDataSource<Employee>;

  constructor(
    private dialog:MatDialog
  ){
    super();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Employee>(this.data)
    console.log(this.data);
    console.log(this.dataSource.filteredData);
  }

  editModal(row:Employee): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        employee: row,
        action: 'edit'
      }
    });

    this.subs.sink = dialogRef.afterClosed().subscribe();
    console.log(row);

  }

  addModal(): void{
    const dialogRef = this.dialog.open(ModalComponent, {
      data:{
        employee:{
          name: "",
          address:"",
        phone:0,
          date:"",
          email: "",
        },
        action: 'add'
      }
    });

    this.subs.sink = dialogRef.afterClosed().subscribe();
    console.log("Add");

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

  pageEvent(e:PageEvent){
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
