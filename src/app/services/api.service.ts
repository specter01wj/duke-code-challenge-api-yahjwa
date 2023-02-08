import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private url = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private httpc: HttpClient) {}

  getData(type: Number): Observable<any> {
    let outputUrl = this.url + type;
    console.log(outputUrl);
    return this.httpc.get<any>(outputUrl);
  }
}
