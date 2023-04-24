import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { MatDialog } from '@angular/material/dialog';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent extends UnsubscribeOnDestroyAdapter {
  public data: Employee[] = [
    {
      name: "pavel",
      address:"calle 42",
      phone:8921094812,
      date:"12/11/2000",
      email: "pavel@example.com",
      sn: "hombre",
      civil: "soltero"
    },
    {
      name: "hibran",
      address:"calle rosales",
      phone:6058342495,
      date:"12/08/1996",
      email: "hibran@example.com",
      sn: "hombre",
      civil: "casado"
    },
    {
      name: "andrea",
      address:"calle pino",
      phone:9442402340,
      date:"23/06/1998",
      email: "andrea@example.com",
      sn: "mujer",
      civil: "viuda"
    },
  ];
  displayedColumns: string[] = ['name', 'address', 'phone', 'email', 'options'];

  constructor(
    private dialog:MatDialog
  ){
    super();
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
}
