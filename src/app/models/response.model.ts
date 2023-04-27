import { Employee } from "./employee.model";

export interface Response {
  statusCode: number;
  body: Employee[];
}
