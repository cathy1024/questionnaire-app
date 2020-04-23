import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { EditService } from './edit.service';
import { Questionnaire } from '../QuestionType';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.less']
})
export class PageEditComponent implements OnInit {
  id;
  questionnaire: Questionnaire;
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
      if (data) {
        this.id = data;
        this.getData(this.id);
      } else {
        // 创建一个新的问卷
        this.questionnaire = this.createData();
      }
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

  // 创建新问卷
  createData() {
    const createDate = new Date(); 
    let dataObj: Questionnaire = {
      title: '',
      describe: '',
      id: 0,
      createDate: createDate,
      isShowGreeting: true,
      isTop: false
    }
    return dataObj;
  }
}
