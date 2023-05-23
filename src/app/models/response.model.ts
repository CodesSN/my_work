import { trucks } from "./assets.model";
import { Employee } from "./employee.model";

export interface Response {
  statusCode: number;
  body: Employee[] | trucks[];
}

export interface ResponseEmployees {
  statusCode:number;
  body: Employee[];
}

export interface ResponseVehicles {
  statusCode:number;
  body: trucks[];
}
