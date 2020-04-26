import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DefaultData } from '../default-data';
import { StorageService } from '../utils/storage.service';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  constructor(
    private http: HttpClient,
    public storageService: StorageService
  ) { }

  // 获取问卷mock数据
  getData(params = {}): Observable<any> {
    let url = 'assets/mockData/data.json';
    return this.http.get(url, params);
  }

  // 创建题目
  createQuestionItem(params): Observable<any> {
    let itemObj = params;
    return itemObj;
  }

  // 获取问卷列表(包括默认数据和localStorage)中最大的问卷id
  getMaxId () {
    const localData = this.storageService.get('questionnaireList');
    const defaultData = DefaultData;
    const allData = [...localData, ...defaultData];
    let maxId = 0;
    allData.forEach(d => {
      const id = d.id;
      maxId = id > maxId ? id : maxId;
    })
    return maxId;
  }
}
