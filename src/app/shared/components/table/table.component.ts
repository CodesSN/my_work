import { Component, ViewChild, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee.model';
import { UnsubscribeOnDestroyAdapter } from '../../UnsubscribeOnDestroyAdapter';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { trucks } from 'src/app/models/assets.model';
import { EditComponent } from '../edit_assets/edit.component';
import { AddComponent } from '../add_assets/add.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends UnsubscribeOnDestroyAdapter implements OnInit, OnChanges  {
  public filteredData:Employee[]|trucks[] = [];
  public searchValue = '';
  public pageSize = 5;
  public pageIndex = 0;
  @Input() title!:string;
  @Input() data!:Employee[]|trucks[];
  @Input() displayedColumns!: string[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public dataSource!: MatTableDataSource<Employee|trucks>;

  constructor(
    private dialog:MatDialog,
    private snackBar: MatSnackBar
  ){
    super();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Employee|trucks>(this.data);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes:SimpleChanges):void {
    if(this.data.length !== 0){
      this.dataSource.data = this.data;
    }
  }

  editModal(row:Employee|trucks): void {
    if(this.title === 'Employee') {
      const dialogRef = this.dialog.open(ModalComponent, {
        data: {
          employee: row,
          action: 'edit'
        }
      });
      this.subs.sink = dialogRef.afterClosed().subscribe(response => {
      if(response){
        this.showNotification(
          'black',
          'Edit Employee Successfully...!!!',
          'bottom',
          'center');
        location.reload();
      }
    });
    }else if(this.title === 'Trucks'){
      const dialogRef = this.dialog.open(EditComponent, {
        width: '750px',
        height: '550px',
        data: {
          trucks: row
        }
      });
      this.subs.sink = dialogRef.afterClosed().subscribe();
    }
  }

  addModal(): void{
    let dialogRef
    if(this.title === 'Trucks'){
       dialogRef = this.dialog.open(AddComponent, {
        width: '500px',
        data:{
          trucks: {
            id: 0,
            number: '',
            type: '',
            plate: '',
            code: '',
            year: '',
            make: '',
            model: '',
            vin: '',
            up: '',

          },
          action: 'add'
        }
      });
    }else{
       dialogRef = this.dialog.open(ModalComponent, {
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
    }

    this.subs.sink = dialogRef.afterClosed().subscribe(response => {
      if(response){
        this.showNotification(
        'snackbar-success',
        'Add Employee Successfully...!!!',
        'bottom',
        'center');

        location.reload();
      }
    });
  }

  searchFilter(){
    const filterValue = this.searchValue.trim().toLowerCase();
    if(filterValue === ''){
      this.dataSource.data = this.data;
    } else {
       if(this.title === 'Employee'){
        this.dataSource.data = (this.data as Employee[]).filter(element => {
          return element.name.toLowerCase().includes(this.searchValue);
        });
       }else if(this.title === 'Trucks'){
        this.dataSource.data = (this.data as trucks[]).filter(element => {
          return element.plate.toLowerCase().includes(this.searchValue);
        });
       }
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

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition,
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
}
