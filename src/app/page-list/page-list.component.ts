import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Question } from '../question'

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.less']
})
export class PageListComponent implements OnInit {
  listData: Question[];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getListData();
  }

  // 获取列表数据
  getListData () {
    this.listService.getListData().subscribe((res) => {
      this.listData = res.list;
    })
  }

}
