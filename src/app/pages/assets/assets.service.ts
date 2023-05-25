import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Response, ResponseVehicles } from '../../models/response.model';


@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  constructor(
    private http: HttpClient
  ){}

  getAllAssets(){
    return this.http.get<ResponseVehicles>(`${environment.apiUrl}/assets/get_assets`);
  }

  getAsset(sub:string){
    return this.http.get<any>(`${environment.apiUrl}/assets/assigned_to?sub=${sub}`)
  }

  addAssets(id:string){
    console.log(id);
    // Logica para añadir a un empleado
  }

  saveAssets(id:string){
    // Logica para salvar a un empleado
    // Verificar si la informacion es la misma
    console.log(id);

  }
}
