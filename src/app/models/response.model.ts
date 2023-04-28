import { trucks } from "./assets.model";
import { Employee } from "./employee.model";

export interface Response {
  statusCode: number;
  body: Employee[]|trucks[];
}
