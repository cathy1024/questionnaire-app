import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ListService } from './list.service';
import { Question } from '../question';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.less']
})
export class PageListComponent implements OnInit {
  listData: Question[];

  constructor(
    private router: Router,
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.getListData();
  }

  // 获取列表数据
  getListData () {
    this.listService.getListData().subscribe((res) => {
      this.listData = res.list;
    })
  }

  // 跳转到问卷编辑
  gotoEdit (id) {
    this.router.navigate(['/edit', { id: id }]);
  }

}
