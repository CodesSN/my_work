import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';
import { trucks } from 'src/app/models/assets.model';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  public data:Employee[]|trucks[] = []
  public displayedColumns: string[] = ['name', 'address', 'phone', 'email', 'options'];

  constructor(
    private employeeService:EmployeeService
  ){}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.data = data.body;
    })
  }
}
