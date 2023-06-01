export interface Appointment {
  id_sub: string;
  date: Date;
  address: string;
  addressClient: string;
  barber: string;
  cost: number;
  duration: number;
  emailClient: string;
  nameClient: string;
  phoneClient: string;
  service: string;
  paid:boolean;
  time: string;
}
