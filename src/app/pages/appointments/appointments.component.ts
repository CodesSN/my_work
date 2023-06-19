import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BarberService } from 'src/app/core/service/barber.service';
import { Barber } from 'src/app/models/barber.model';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  public barbers: any = [];
  public barberForm!: FormGroup;

  constructor(
    private barberService: BarberService,
    private fb: FormBuilder,
    private router: Router
  ){}

  async ngOnInit(){
    this.createForm();
    this.barberService.getBarbers().subscribe(response => {
      this.barbers = response;
    });
  }

  private createForm(){
    this.barberForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
    })
  }

  selectBarber(barber:Barber){
    // console.log(barber);
    this.barberForm.get('id')?.setValue(barber.id);
    this.barberForm.get('name')?.setValue(barber.name);
  }

  confirmAppointment(){
    if(this.barberForm.valid){
      //Obtenemos el barbero para identificar al barbero que vamos a usar
      const barber = this.barberForm.get('name')?.value;
      this.barberService.setBarberInfo(this.barberForm.getRawValue())
      this.router.navigate(['/appointments/select', barber])
    }
  }

  aboutBarber(){
    // Abrir modal para mostrar descripcion del barbero
  }
}

