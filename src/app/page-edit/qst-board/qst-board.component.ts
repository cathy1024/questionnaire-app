import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../QuestionType'

@Component({
  selector: 'qst-board',
  templateUrl: './qst-board.component.html',
  styleUrls: ['./qst-board.component.less']
})
export class QstBoardComponent implements OnInit {
  @Input() qstList: Question;
  constructor() { }

  ngOnInit(): void {
  }

}
