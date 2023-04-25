import { Component, ViewChild, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { MatDialog } from '@angular/material/dialog';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent extends UnsubscribeOnDestroyAdapter implements OnInit{
  public filteredData:Employee[] = [];
  public searchValue = '';
  public pageSize = 5;
  public pageIndex = 0;
  public data: Employee[] =
  [
    {
      "name": "John Smith",
      "address": "456 Elm Street",
      "phone": "555-987-6543",
      "date": "03/11/1985",
      "email": "johnsmith@example.com",
      "civil": "Soltero",
      "sn": "987-65-4321"
    },
    {
      "name": "Sarah Johnson",
      "address": "789 Oak Avenue",
      "phone": "555-456-7890",
      "date": "12/07/1992",
      "email": "sarahjohnson@example.com",
      "civil": "Soltero",
      "sn": "456-78-9012"
    },
    {
      "name": "Robert Brown",
      "address": "321 Maple Street",
      "phone": "555-234-5678",
      "date": "08/22/1980",
      "email": "robertbrown@example.com",
      "civil": "Casado",
      "sn": "234-56-7890"
    },
    {
      "name": "Jessica Lee",
      "address": "555 Pine Drive",
      "phone": "555-678-1234",
      "date": "05/16/1998",
      "email": "jessicalee@example.com",
      "civil": "Soltero",
      "sn": "678-90-1234"
    },
    {
      "name": "Michael Davis",
      "address": "888 Cedar Lane",
      "phone": "555-345-6789",
      "date": "09/30/1987",
      "email": "michaeldavis@example.com",
      "civil": "Casado",
      "sn": "345-67-8901"
    },
    {
      "name": "Michael Davis",
      "address": "888 Cedar Lane",
      "phone": "555-345-6789",
      "date": "09/30/1987",
      "email": "michaeldavis@example.com",
      "civil": "Casado",
      "sn": "345-67-8901"
    },
  ];
  public dataSource = new MatTableDataSource<Employee>(this.data);
  public displayedColumns: string[] = ['name', 'address', 'phone', 'email', 'options'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog:MatDialog
  ){
    super();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    // Traer la data en esta parte para cargar los datos desde 0
  }

  editEmployee(row:Employee): void {
    const dialogRef = this.dialog.open(EditFormComponent, {
      data: {
        employee: row,
        action: 'edit'
      }
    });

    this.subs.sink = dialogRef.afterClosed().subscribe();
  }

  addEmployee(): void{
    const dialogRef = this.dialog.open(EditFormComponent, {
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
