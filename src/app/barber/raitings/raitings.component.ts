import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import * as moment from 'moment';
@Component({
  selector: 'app-raitings',
  templateUrl: './raitings.component.html',
  styleUrls: ['./raitings.component.scss'],
})
export class RaitingsComponent implements OnInit {
  constructor(private authservice: AuthService) {}
  private currentUser: any;
  public list: any = [];
  public rate: any = 0;
  public current: any = 0;
  public last: any = 0;
  public rateDiff: any = 0;

  async ngOnInit(): Promise<void> {
    this.list = await this.getList();
    this.rate = await this.getRateBarber(this.list);
    this.rateDiff = await this.getIncOrDec(this.list);
  }

  async getList() {
    this.currentUser = JSON.parse(
      localStorage.getItem(
        'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.' +
          localStorage.getItem(
            'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.LastAuthUser'
          ) +
          '.userData'
      ) as string
    ).UserAttributes[0].Value;
    const url =
      'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/rates/barber/get?sub=' +
      this.currentUser;
    const config: AxiosRequestConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url,
      headers: {},
    };
    return await axios
      .request(config)
      .then((response) => {
        const data = response.data
        data.sort((a:any, b:any) => {
          const DateTimeA = new Date(`${a.date} ${a.time}`);
          const DateTimeB = new Date(`${b.date} ${b.time}`);
          return DateTimeB.getTime() - DateTimeA.getTime();
        });
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async getIncOrDec(data: any[]): Promise<number>{
    const ActualMonth = moment().month() + 1;
    const PrevMonth = ActualMonth - 1;
    let ActualRate = 0;
    let PrevRate = 0;
    let index = 0;
    let prevIndex = 0;

    data.map((data) => {
      const x = data.date.split('/');

      if (parseInt(x[1]) === ActualMonth) {
        ActualRate += data.rate;
        index++;
      } else if (parseInt(x[1]) === PrevMonth) {
        PrevRate += data.rate;
        prevIndex++;
      }
    });
    ActualRate = ActualRate / index;
    PrevRate = PrevRate / index;
    const dif = ActualRate - PrevRate;
    const op =
      dif > 0
        ? PrevRate !== 0
          ? dif / PrevRate
          : dif
        : PrevRate !== 0
        ? (dif * -1) / PrevRate - 1
        : dif;

    return !isNaN(op * 100) ? op * 100 : 0;
  }
  async getRateBarber(data: any[]): Promise<number> {
    let rate = 0;
    data.map((data) => {
      rate = rate + data.rate;
    });

    return !isNaN(rate / data.length) ? rate / data.length : 0;
  }
  getRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
}
