import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Response } from '../models/response.model';


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
    return this.http.get<Response>(`${environment.apiUrl}/assets/get_assets`);
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
