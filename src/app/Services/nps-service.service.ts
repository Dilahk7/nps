import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { npsmodel, SetVals } from '../Components/Form/model-helper';

@Injectable({
  providedIn: 'root',
})
export class NPSServiceService {
  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  public async calculate(sendamnt: npsmodel) {
    return await this.http
      .post<number>('http://localhost:8080/calculate', sendamnt)
      .toPromise();
  }

  public dropvalues() {
    return this.http.get<number[]>('http://localhost:8080/dropvalues');
  }

  public submitamount(valobj: SetVals) {
    this.http.post('http://localhost:8080/submitamt', valobj).subscribe();
  }
}
