import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment, AppointmentStatus } from 'src/app/models/appointment.model';
import { BarberFiles } from 'src/app/models/barber.model';
import { UpdatedUser } from 'src/app/models/employee.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BarberService {
  constructor(
    private http: HttpClient
  ) {}

  getVans(){
    this.http.get<any>(`${environment}/`)
  }

  getKPIS(sub:string){
    return this.http.get<any>(`${environment.apiUrl}/revx_Get_Week_Month_Year_Stats?sub=${sub}`,)
  }
  // Subir archivos del barbero
  uploadBarberFiles(files: BarberFiles){
    return this.http.post<any>(`${environment.apiUrl}/employee/files/upload`, files);
  }

  uploadBarberInfo(files: UpdatedUser){
    return this.http.put<any>(`${environment.apiUrl}/employee/upload/data`, files);
  }

  getBarberAppointments(){
    return this.http.get<Appointment[]>(`${environment.apiUrl}/citas/get`);
  }

  getBarberAppointmentsMig(){
    return this.http.get<Appointment[]>(`${environment.apiUrl}/mig/appointments/get/all`);
  }

  changeAppointmentMonitoristStatus(status: AppointmentStatus){
    return this.http.put<any>(`${environment.apiUrl}/mig/appointments/put`, status);
  }

  getBarberAppointmentsById(sub:string){
    return this.http.get<Appointment[]>(`${environment.apiUrl}/mig/appointments/by_id?id_sub=${sub}`)
  }

  changeAppointmentState(id:any){
    return this.http.put<any>(`${environment.apiUrl}/Appoitments/Paid/Confirm`, id);
  }

  readFileAsync(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Error al leer el archivo'));
        }
      };

      reader.onerror = () => {
        reject(new Error('Error al leer el archivo'));
      };

      reader.readAsDataURL(file);
    });
  }

  getDate(date: Date | null){
    if(date){
      const newDate = new Date(date);
      const dateWithoutHour = newDate.toISOString().split("T")[0];
      return dateWithoutHour;
    }
    return '';
  }

}
