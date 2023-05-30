import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Response, ResponseEmployees } from '../../models/response.model';
import { Employee } from '../../models/employee.model';
import { axisBottom } from 'd3';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  datos:any[] = [];
  constructor(
    private http: HttpClient
  ){}

  getSub(){
    const user = JSON.parse(
      localStorage.getItem(
        'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.' +
          localStorage.getItem(
            'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.LastAuthUser'
          ) +
          '.userData'
      ) as string
    ).UserAttributes[0].Value;

    return user;
  }

  getUserInfo(){
    const user = JSON.parse(
      localStorage.getItem(
        'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.' +
          localStorage.getItem(
            'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.LastAuthUser'
          ) +
          '.userData'
      ) as string
    ).UserAttributes;
    return user;
  }

  async getIDEmployee(){
    const sub = this.getSub();
    const datos = await this.getAllEmployeesAxios();
    let id;
    datos.forEach((e: any) => {
      if (sub === e.sub) {
        return (id = e.id);
      }
    });

    const employeeData = await this.getdataEmployeebyId(id);
    return employeeData.data.body.id;
  }


  getAllEmployees(){
    return this.http.get<ResponseEmployees>(`${environment.apiUrl}/employee`);
  }


  getEmployeeData(id:number):Observable<any>{
    return this.http.get<Response>(`${environment.apiUrl}/employee/${id}`);
  }



  getAllEmployeesAxios(){
    const config:any = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/employee',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return axios.request(config)
    .then((response) => {
      const datos = response.data.body;
      return datos;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
  }



  getAllEmployeesAuto(){
    const config:any = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/employee',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return axios.request(config)
    .then((response) => {
      const datos = response.data.body.map((e: any) => e.name);
      return datos;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
  }
  async getdataEmployeebyId(id: any){
    const url =
    'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/employee/' +
    id;
  const config: AxiosRequestConfig = {
    method: 'get',
    maxBodyLength: Infinity,
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.request(config);

  return response;
  }
  addEmployee(body:any){
    return this.http.post<any>(`${environment.apiUrl}/employee`, body);
  }

  getRoles(){
    return this.http.get<any>(`${environment.apiUrl}/roles/get`);
  }

  saveEmployee(body:any){
    return this.http.put<any>(`${environment.apiUrl}/employee/${body.id}`, body);
  }

}
