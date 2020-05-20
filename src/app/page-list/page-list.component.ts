import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ListService } from './list.service';
import { Questionnaire } from '../QuestionType';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.less']
})
export class PageListComponent implements OnInit {
  allData: Questionnaire[];
  listData: Questionnaire[];

  pageIndex = 1;
  pageSize = 10;

  constructor(
    private router: Router,
    private listService: ListService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getInitAllData();
    this.getListData();
  }

  // 获取全部列表数据
  getInitAllData () {
    this.allData = this.listService.getDefaultData()
  }

  // 复制问卷
  copyItem(item) {
    let obj = JSON.parse(JSON.stringify(item));
    obj.id = new Date().getTime();
    obj.index = this.allData.length;
    this.allData.push(obj);
    this.message.success('复制成功');
    this.getListData();
  }

  // 删除问卷
  delConfirm(id) {
    this.allData = this.allData.filter(item => {
      return item.id != id;
    });
    this.message.success('删除成功');
    this.allData = this.allData.map((item, i) => {
      item.index = i;
      return item;
    })
    this.getListData();
  }

  // 获取当前页数据
  getListData() {
    const i = this.pageIndex;
    const size = this.pageSize;
    const allData = this.allData;
    let list: Questionnaire[];

    list = allData.slice(size*(i - 1), size*i);
    this.listData = list;
  }

  // 页码改变时
  onPageIndexChange(i) {
    this.pageIndex = i;
    this.getListData();
  }

}
