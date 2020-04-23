import { Component, OnInit } from '@angular/core';
import QuestionType from './questionType.config'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
  questionType = QuestionType
  qstList = [];
  constructor() { }

  ngOnInit(): void {

  }

  getSubSidebar (e) {
    console.log(e);
    this.qstList.push(e);
  }

}
