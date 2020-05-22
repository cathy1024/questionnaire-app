import { Component, Input } from '@angular/core'
import { Question, Option, MatrixOption } from 'src/app/QuestionType';
import { NzMessageService } from 'ng-zorro-antd/message';

/**单选题 1 */
@Component({
    selector: 'qst-radio',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <ul>
                <li class="qst-option" *ngFor="let item of qst.options">
                    <div class="qst-option-content">
                        <label nz-radio></label>
                        <input nz-input [nzSize]="'small'" [(ngModel)]="item.optionContent" />
                    </div>
                    <div class="qst-option-action">
                        <i nz-icon nzType="close" nzTheme="outline" (click)="onDeleteOption(item.optionId)"></i>
                    </div>
                </li>
            </ul>
            <div class="qst-options-actions">
                <i nz-icon nzType="plus-square" nzTheme="outline" title="添加选项" (click)="onAddOption()"></i>
            </div>
        </div>
    `
})
export class QstRadioComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    constructor(
        private message: NzMessageService
    ) {

    }

    // 添加选项
    onAddOption(): void {
        const t = new Date().getTime();
        const option: Option = {
            optionId: t,
            optionContent: '选项' + t
        };
        this.qst.options.push(option);
        this.message.success('添加成功');
    }

    // 删除选项
    onDeleteOption(optionId: number): void {
        const options = this.qst.options;
        if (options.length <= 2) {
            this.message.warning('最少保留2个选项');
            return;
        }
        this.qst.options = options.filter(item => {
            return item.optionId !== optionId;
        });
        this.message.success('删除成功');
    }
}


/**多选题 2 */
@Component({
    selector: 'qst-checkbox',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" type="text" [class]="active ? 'active':''" [value]="qst.name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <ul>
                <li class="qst-option" *ngFor="let item of qst.options">
                    <div class="qst-option-content">
                        <label nz-checkbox></label>&nbsp;&nbsp;
                        <input nz-input [nzSize]="'small'" [(ngModel)]="item.optionContent" />
                    </div>
                    <div class="qst-option-action">
                        <i nz-icon nzType="close" nzTheme="outline" (click)="onDeleteOption(item.optionId)"></i>
                    </div>
                </li>
            </ul>
            <div class="qst-options-actions">
                <i nz-icon nzType="plus-square" nzTheme="outline" title="添加选项" (click)="onAddOption()"></i>
            </div>
        </div>
    `
})
export class QstCheckboxComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    constructor(
        private message: NzMessageService
    ) {

    }

    // 添加选项
    onAddOption() {
        const t = new Date().getTime();
        const option: Option = {
            optionId: t,
            optionContent: '选项' + t
        };
        this.qst.options.push(option);
        this.message.success('添加成功');
    }

    // 删除选项
    onDeleteOption(optionId: number): void {
        const options = this.qst.options;
        if (options.length <= 2) {
            this.message.warning('最少保留2个选项');
            return;
        }
        this.qst.options = options.filter(item => {
            return item.optionId !== optionId;
        });
        this.message.success('删除成功');
    }
}


/**单行问答题 3 */
@Component({
    selector: 'qst-text',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <input nz-input ([ngModel])="value" />
        </div>
    `
})
export class QstTextComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}


/**多行问答题 4 */
@Component({
    selector: 'qst-textarea',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <textarea rows="4" nz-input ([ngModel])="value"></textarea>
        </div>
    `
})
export class QstTextareaComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}



/**描述说明 5 */
@Component({
    selector: 'qst-desc',
    template: `
        <div class="qst-item-hd">
            <textarea rows="2" nz-input [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name"></textarea>
        </div>
    `,
    styles: ['.qst-item-hd { padding-top: 30px; }']
})
export class QstDescComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}



/**排序题 6 */
@Component({
    selector: 'qst-sort',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <ul>
                <li class="qst-option" *ngFor="let item of qst.options">
                    <div class="qst-option-content">
                        <input nz-input [nzSize]="'small'" [(ngModel)]="item.optionContent" />
                    </div>
                    <div class="qst-option-action">
                        <i nz-icon nzType="close" nzTheme="outline" (click)="onDeleteOption(item.optionId)"></i>
                    </div>
                </li>
            </ul>
            <div class="qst-options-actions">
                <i nz-icon nzType="plus-square" nzTheme="outline" title="添加选项" (click)="onAddOption()"></i>
            </div>
        </div>
    `
})
export class QstSortComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;

    constructor(
        private message: NzMessageService
    ) {

    }

    // 添加选项
    onAddOption() {
        const t = new Date().getTime();
        const option: Option = {
            optionId: t,
            optionContent: '选项' + t
        };
        this.qst.options.push(option);
        this.message.success('添加成功');
    }

    // 删除选项
    onDeleteOption(optionId: number): void {
        const options = this.qst.options;
        if (options.length <= 2) {
            this.message.warning('最少保留2个选项');
            return;
        }
        this.qst.options = options.filter(item => {
            return item.optionId !== optionId;
        });
        this.message.success('删除成功');
    }
}



/**评分题 7 */
@Component({
    selector: 'qst-score',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content" style="padding-left: 20px;">
            <nz-rate [ngModel]="0" [nzCount]="qst.iconCount" [nzCharacter]="characterIcon"></nz-rate>
            <ng-template #characterIcon><i nz-icon [nzType]="qst.iconType"></i></ng-template>
        </div>
    `
})
export class QstScoreComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}



/**矩阵题 8 */
@Component({
    selector: 'qst-matrix',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <nz-table #basicTable [nzData]="matrixData" [nzFrontPagination]="false" [nzBordered]="true">
                <thead>
                    <tr>
                        <th></th>
                        <th *ngFor="let option of optionData" class="th-option-content">
                            <input nz-input [(ngModel)]="option.optionContent" />
                            <i class="icon-minus-circle" nz-icon nzType="minus-circle" nzTheme="outline"></i>
                        </th>
                        <th nzWidth="60px" nzAlign="center">
                            <i nz-icon nzType="plus-square" nzTheme="outline" title="添加选项" (click)="onAddOption()"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let matrix of matrixData">
                        <td><input nz-input [(ngModel)]="matrix.matrixContent" /></td>
                        <td *ngFor="let option of optionData" nzAlign="center">
                            <label nz-radio></label>
                        </td>
                        <td nzAlign="center">
                            <i nz-icon nzType="close" nzTheme="outline" title="删除题目"></i>
                        </td>
                    </tr>
                </tbody>
            </nz-table>
            <div class="qst-options-actions" style="margin-top: -18px;margin-left: 15px;">
                <i nz-icon nzType="plus-square" nzTheme="outline" title="添加题目" (click)="onAddMatrixOption()"></i>
            </div>
        </div>
    `,
    styles: [`
        .icon-minus-circle {
            position: absolute;
            top: 2px;
            right: 2px;
            color: red;
        }
        .anticon-close {
            color: red;
        }
    `]
})
export class QstMatrixComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;

    constructor(
        private message: NzMessageService
    ) {}

    get matrixData() {
        return this.qst.matrixOptions;
    };

    get optionData() {
        return this.qst.options;
    }    

    // 添加选项
    onAddOption(): void {
        const t = new Date().getTime();
        const option: Option = {
            optionId: t,
            optionContent: '选项' + t
        };
        this.qst.options.push(option);
        this.message.success('添加成功');
    }

    // 添加题目
    onAddMatrixOption(): void {
        const t = new Date().getTime();
        const matrix: MatrixOption = {
            matrixId: t,
            matrixContent: '题目' + t
        };
        this.qst.matrixOptions.push(matrix);
        this.message.success('添加成功');
    }
}



/**图片题 9 */
@Component({
    selector: 'qst-pic',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <textarea ([ngModel])="value"></textarea>
        </div>
    `
})
export class QstPicComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}



/**文件上传 10 */
@Component({
    selector: 'qst-file',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <textarea ([ngModel])="value"></textarea>
        </div>
    `
})
export class QstFileComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}



/**下拉框 11 */
@Component({
    selector: 'qst-select',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <textarea ([ngModel])="value"></textarea>
        </div>
    `
})
export class QstSelectComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}



/**日期 12 */
@Component({
    selector: 'qst-date',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <textarea ([ngModel])="value"></textarea>
        </div>
    `
})
export class QstDateComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}



/**多级下拉 13 */
@Component({
    selector: 'qst-cascader',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <textarea ([ngModel])="value"></textarea>
        </div>
    `
})
export class QstCascaderComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}



/**比重题 14 */
@Component({
    selector: 'qst-proportion',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <textarea ([ngModel])="value"></textarea>
        </div>
    `
})
export class QstProportionComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}


/**分行填空题 16 */
@Component({
    selector: 'qst-fill',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <nz-tag nzColor="red" *ngIf="qst.mustFill">必填</nz-tag>
            <nz-tag nzColor="gray">{{qst.score}}分</nz-tag>
        </div>
        <div class="qst-item-content">
            <textarea ([ngModel])="value"></textarea>
        </div>
    `
})
export class QstFillComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}
