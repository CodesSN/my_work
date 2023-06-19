export interface BarberFiles {
  barber_Driver_License: string;
  barber_License: string;
  bank_Account: string;
  deposit_Instructions: string;
  social_Security_Card: string;
  fileName: string;
  id: number;
}

export interface BarberInfo {
  id: string;
  name: string;
}

export interface Barber extends BarberInfo {
  address: string;
  approved: boolean;
  civil_status: string;
  date: string;
  description: string;
  email:string;
  gender: string;
  id_role: number;
  ig_link: string;
  last_name: string;
  phone: string;
  ssn: string;
  upload: boolean;
}
