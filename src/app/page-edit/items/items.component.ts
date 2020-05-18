import { Component, OnInit } from '@angular/core';
import { QuestionType, defaultOptions } from './questionType.config';
import { TypeInfo, Question } from '../../QuestionType';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
  questionType: TypeInfo[] = QuestionType;
  qstList = [];
  constructor(
  ) { }

  ngOnInit(): void {

  }

  getSubSidebar (e) {
    const qst = this.createQst(e);
    this.qstList.push(qst);
    console.log(this.qstList);
  }

  createQst (typeInfo: TypeInfo): Question {
    const typeId = typeInfo.id;
    const typeName = typeInfo.name;
    let qst: Question = {
      name: typeName,
      typeId: typeId,
      id: new Date().getTime(), // 此处id应遍历问卷列表数据，取得列表中最大id，加1.但现在没有真实数据。用时间戳代替。
      score: 0,
      mustFill: false
    };

    switch (typeId) {
      case 1:
      case 2:
        qst.options = defaultOptions
        break;
      default:
        break;
    }
    return qst;
  }

  // 删除题目
  onDeleteItem(id) {
    let qstList = this.qstList.filter(item => {
      return item.id !== id;
    });
    this.qstList = qstList;
  }

  // 复制题目
  onCopyItem(item){
    this.qstList.push(item);
  }

}
