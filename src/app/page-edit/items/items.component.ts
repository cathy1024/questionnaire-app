import { Component, OnInit } from '@angular/core';
import QuestionType from './questionType.config'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
  questionType = QuestionType
  constructor() { }

  ngOnInit(): void {

  }

}
