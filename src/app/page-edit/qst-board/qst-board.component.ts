import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  @Output() delItemEvent = new EventEmitter<string>();
  @Output() copyItemEvent = new EventEmitter<string>();

  qstItemClick (item) {
    this.activeItem = item.id;
  }

  // 删除题目
  deleteItem (item): void {
    // 确定删除提示
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '320px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'yes') {
        const id = item.id;
        this.delItemEvent.emit(id);
      }
    })
  }

  // 复制题目
  copyItem (item): void {
    let obj = JSON.parse(JSON.stringify(item));
    obj.id = new Date().getTime();
    this.copyItemEvent.emit(obj);
  }

  // 拖动题目
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.qstList, event.previousIndex, event.currentIndex);
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <h1 mat-dialog-title>删除提示</h1>
    <div mat-dialog-content>确定删除？</div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()">取消</button>
      <button mat-button (click)="onConfirm()">确定</button>
    </div>
  `
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close('no');
  }
  onConfirm(): void {
    this.dialogRef.close('yes');
  }
}