export interface Appointment {
  id_sub: string;
  id:number;
  address: string;
  addressClient: string;
  barber: string;
  cost: number;
  creation_date: string;
  duration: number;
  lat:number,
  lng:number,
  emailClient: string;
  nameClient: string;
  phoneClient: string;
  service: string;
  paid:boolean;
  start: Date;
  end: Date;
  confirmed: boolean;
  inPlace: boolean;
}

export interface AppointmentStatus {
  id: number,
  attr: 'confirmed' | 'paid' | 'inPlace';
}
