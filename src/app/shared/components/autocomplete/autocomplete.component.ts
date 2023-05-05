import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { EmployeeService } from 'src/app/human-resources/employee.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl('');
  options: any[] = [];
  filteredOptions!: Observable<string[]>;
  constructor(
    private employeeService:EmployeeService
  ){}
  async ngOnInit() {
    this.options = await this.employeeService.getAllEmployeesAuto();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option:string) => option.toLowerCase().includes(filterValue));
  }
}
