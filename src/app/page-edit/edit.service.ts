import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http: HttpClient) { }

  // 获取问卷mock数据
  getData(params = {}): Observable<any> {
    let url = 'assets/mockData/data.json';
    return this.http.get(url, params);
  }
}
