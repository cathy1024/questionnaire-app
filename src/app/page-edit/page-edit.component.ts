import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { EditService } from './edit.service';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.less']
})
export class PageEditComponent implements OnInit {
  id;
  questionnaire;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private editService: EditService
  ) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // console.log('id', this.id);
    this.route.paramMap.pipe(
      switchMap(params => {
        return of(params.get('id'))
      })
    ).subscribe((data) => {
      console.log('id', data)
      this.id = data;
      this.getData(this.id);
    })
  }

  // 获取问卷数据
  getData(id) {
    this.editService.getData().subscribe((res) => {
      const data = res.data;
      let questionnaire = data.filter((item) => {
        return item.id == id;
      })
      this.questionnaire = questionnaire;
      console.log(questionnaire);
    })
  }
}
