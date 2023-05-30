export interface Employee {
  id: number;
  name: string;
  address:string;
  phone:string;
  date:string;
  email: string;
  ssn: string;
  civil_status: string;
  id_role: string;
  social_link: string[],
  sub: string;
  upload: boolean;
}

export interface UpdatedUser {
  id:number;
  name:string;
  last_name:string;
  address:string;
  date:Date;
  ssn: string;
  civil_status: string;
  gender: string;
}
