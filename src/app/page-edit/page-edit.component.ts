import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';

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
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      console.log(111);
    })
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // console.log('id', this.id);
    this.route.paramMap.pipe(
      switchMap(params => {
        return of(params.get('id'))
      })
    ).subscribe((data) => {
      if (data) {
        this.id = data;
        this.getData(this.id);
      } else {
        // 创建一个新的问卷
        this.questionnaire = this.createData();
        let questionnaireList = this.editService.storageService.get('questionnaireList');
        questionnaireList = questionnaireList ? questionnaireList : [];
        questionnaireList.push(this.questionnaire);
        this.editService.storageService.set('questionnaireList', questionnaireList);
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
    })
  }

  // 创建新问卷
  createData() {
    const id = this.editService.getMaxId();
    let dataObj: Questionnaire = {
      title: "问卷名称id",
      index: 0,
      describe: '问卷描述id',
      id: id,
      createDate: new Date(),
      isLocked: true,
      isShowGreeting: false,
      isTop: true,
      questionList: []
    }
    return dataObj;
  }
}
