import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarberService } from 'src/app/core/service/barber.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  public barbers: any;
  public barberForm!: FormGroup;

  constructor(
    private barberService: BarberService,
    private fb: FormBuilder
  ){}

  async ngOnInit(){
    this.createForm();
    this.barberService.getBarbers().subscribe(response => {
      this.barbers = response
    });
  }

  private createForm(){
    this.barberForm = this.fb.group({
      barberSub: ['', [Validators.required]],
      barber: [null, [Validators.required]],
    })
  }


  selectBarber(barber:any){
    console.log(barber);
    // this.barberForm.get('barberSub')?.setValue()


  }

  confirmAppointment(){
    if(this.barberForm.valid){
      // Valid
      console.log('valid');

    } else {
      console.log('not valid');

    }
  }

  aboutBarber(){
    // Abrir modal para mostrar descripcion del barbero
  }
}

