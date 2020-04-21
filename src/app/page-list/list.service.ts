import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  // 获取列表mock数据
  getListData(params = {}):Observable<any> {
    let url = 'assets/mockData/list.json';
    return this.http.get(url, params);
  }
}
