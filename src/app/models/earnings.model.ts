export interface Earnings {
  data: Data;
  estimate: Estimate;
  services: Services;
}
// Data
interface Data {
  week:Period;
  month: Period;
  year:Period;
}

export interface Period {
  citas: Citas[];
  kpis: Kpis;
}


interface Citas {
  service: string;
  payment:boolean;
  data:string;
  sub:string;
}

interface Kpis {
  quatity: Quatity;
  earningEach: Quatity;
  totalEarnings: number;
}

interface Quatity {
  cuts: number;
  beard: number;
  full: number;
}
// End Data

interface Estimate {
  week: string;
}

interface Services {
  beard: Service;
  cut:Service;
  full:Service;
}

interface Service {
  type: string;
  price: number;
}
