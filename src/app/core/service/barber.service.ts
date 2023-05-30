import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BarberFiles } from 'src/app/models/barber.model';
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

}
