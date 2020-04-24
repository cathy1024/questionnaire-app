import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DefaultData } from '../default-data';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  // 获取mock问卷数据
  // getListData(params = {}):Observable<any> {
  //   let url = 'assets/mockData/list.json';
  //   return this.http.get(url, params);
  // }

  // 获取默认的问卷数据
  getDefaultData() {
    return DefaultData;
  }

  // 获取浏览器缓存问卷数据
  getLocalData(){
    
  }
}
