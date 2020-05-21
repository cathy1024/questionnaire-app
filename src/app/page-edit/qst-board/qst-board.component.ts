import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NzMessageService } from 'ng-zorro-antd/message';

import { Question } from '../../QuestionType';

@Component({
  selector: 'qst-board',
  templateUrl: './qst-board.component.html',
  styleUrls: ['./qst-board.component.less']
})
export class QstBoardComponent implements OnInit {
  @Input() qstList: Question[];
  qstName = '问卷标题';
  qstDesc = '问卷描述';
  animal: string;
  activeItem;
  constructor(
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    
  }

  @Output() delItemEvent = new EventEmitter<string>();
  @Output() copyItemEvent = new EventEmitter<string>();
  @Output() getActiveItem = new EventEmitter<string>();

  qstItemClick (item) {
    this.activeItem = item.id;
    this.getActiveItem.emit(item);
  }

  // 删除题目 确定
  delConfirm (item) {
    this.delItemEvent.emit(item.id);
  }

  // 复制题目
  copyItem (item): void {
    let obj = JSON.parse(JSON.stringify(item));
    obj.id = new Date().getTime();
    this.copyItemEvent.emit(obj);
    this.message.success('复制成功', {nzDuration: 1000});
  }

  // 拖动题目
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.qstList, event.previousIndex, event.currentIndex);
  }

}
