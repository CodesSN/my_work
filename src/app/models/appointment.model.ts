export interface Appointment {
  id_sub: string;
  id:number;
  date: Date;
  address: string;
  addressClient: string;
  barber: string;
  cost: number;
  duration: number;
  lat:number,
  lng:number,
  emailClient: string;
  nameClient: string;
  phoneClient: string;
  service: string;
  paid:boolean;
  time: string;
  confirmed: boolean;
  inPlace: boolean;
}

export interface AppointmentStatus {
  id: number,
  attr: 'confirmed' | 'paid' | 'inPlace';
}
