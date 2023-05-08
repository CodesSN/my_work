export class trucks {
  id: number;
  Anumber: string;
  Atype: string;
  plate: string;
  code: string;
  make: string;
  Ayear: string;
  model: string;
  vin: string;
  up: string;
  barber: string;

  constructor(trucks: trucks) {
    {
      this.id = trucks.id || this.getRandomID();
      this.Anumber = trucks.Anumber || '';
      this.Atype = trucks.Atype || '';
      this.plate = trucks.plate || '';
      this.code = trucks.code || '';
      this.Ayear = trucks.Ayear || '';
      this.make = trucks.make || '';
      this.model = trucks.model || '';
      this.vin = trucks.vin || '';
      this.up = trucks.up || '';
      this.barber = trucks.barber || '';
    }
  }
  public getId(): number{
    return this.id;
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
