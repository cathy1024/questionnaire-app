import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Question } from '../../QuestionType';

export interface DialogData {
  animal: string;
  name: string;
}

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

  qstItemClick (item) {
    this.activeItem = item.id;
  }

  // 删除题目
  deleteItem (item): void {
    // 确定删除提示
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '320px',
      data: { name: this.qstName, animal: this.animal }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('confirm已关闭');
      console.log(result);
    })

    const id = item.id;
    this.delItemEvent.emit(id);
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <h1 mat-dialog-title>Hi {{data.name}}</h1>
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
  onConfirm(): void {
    this.dialogRef.close();
  }
}