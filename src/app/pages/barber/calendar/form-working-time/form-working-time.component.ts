import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { WorkingDay } from '../calendar.model';

export interface DialogData {
  action: string;
}

@Component({
  selector: 'app-form-working-time',
  templateUrl: './form-working-time.component.html',
  styleUrls: ['./form-working-time.component.scss']
})
export class FormWorkingTimeComponent implements OnInit {
  workingDaysForm!: UntypedFormGroup;
  days: WorkingDay[] | null = null;
  workingDays: WorkingDay[] = [
    {day: 'Monday', ui: 'M', selected: false},
    {day: 'Tuesday', ui: 'T', selected: false},
    {day: 'Wednesday', ui: 'W', selected: false},
    {day: 'Thursday', ui: 'T', selected: false},
    {day: 'Friday', ui: 'F', selected: false},
    {day: 'Saturday', ui: 'S', selected: false},
    {day: 'Synday', ui: 'S', selected: false},
  ]

  constructor(
    public dialogRef: MatDialogRef<FormWorkingTimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.workingDaysForm = this.fb.group({
      workingDays: [[], [this.dayValidator]],
      startHour: ['', [Validators.required]],
      endHour: ['', [Validators.required, this.hourValidator]]
    })
  }

  private dayValidator(control: FormControl) {
    const value = control.value;
    if (value.length === 0) {
      return { dayselected: true}
    }
    return null;
  }

  private hourValidator(control: AbstractControl): any {
    if (control && control.parent) {
      const startHour = control.parent.get('startHour');
      const endHour = control.parent.get('endHour');

      if (!startHour || !endHour) {
        return null;
      }
      return startHour.value < endHour.value ? null : { notMatchHours: true };
    }
    return null;
  }

  private saveDaysSelected(): WorkingDay[] | null{
    const days = this.workingDays.filter(day => day.selected);
    // console.log(days);
    this.workingDaysForm.get('workingDays')?.setValue(days);
    if(days.length === 0){
      return null;
    }
    return days;
  }

  confirmAddWorkingDays(){
    if(this.workingDaysForm.valid && this.days){
      console.log(this.workingDaysForm.getRawValue());
    }
  }

  changeDayState(daySelected: WorkingDay){
    daySelected.selected = !daySelected.selected;
    this.days = this.saveDaysSelected()
  }
}
