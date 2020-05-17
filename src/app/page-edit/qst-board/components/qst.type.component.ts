import { Component, Input } from '@angular/core'
import { Question } from 'src/app/QuestionType';

/**单选题 1 */
@Component({
    selector: 'qst-radio',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <span *ngIf="qst.mustFill">必填</span>
        </div>
        <div class="qst-item-content">
            <ul>
                <li *ngFor="let item of qst.options">
                    <label><input type="radio" name="option" [value]="item.optionId" /> {{item.optionContent}}</label>
                </li>
            </ul>
        </div>
    `
})
export class QstRadioComponent {
    @Input() qst: Question;
    @Input() active: boolean;
}


/**多选题 2 */
@Component({
    selector: 'qst-checkbox',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" type="text" [class]="active ? 'active':''" [value]="qst.name">
            <span *ngIf="qst.mustFill">必填</span>
        </div>
        <div class="qst-item-content">
            <ul>
                <li *ngFor="let item of qst.options">
                    <label><input type="checkbox" name="option" [value]="item.optionId" /> {{item.optionContent}}</label>
                </li>
            </ul>
        </div>
    `
})
export class QstCheckboxComponent {
    @Input() qst: Question;
    @Input() active: boolean;
}


/**单行问答题 3 */
@Component({
    selector: 'qst-text',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <span *ngIf="qst.mustFill">必填</span>
        </div>
        <div class="qst-item-content">
            <input ([ngModel])="value" />
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
            <span *ngIf="qst.mustFill">必填</span>
        </div>
        <div class="qst-item-content">
            <textarea ([ngModel])="value"></textarea>
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
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <span *ngIf="qst.mustFill">必填</span>
        </div>
    `
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
            <span *ngIf="qst.mustFill">必填</span>
        </div>
        <div class="qst-item-content">
            <textarea ([ngModel])="value"></textarea>
        </div>
    `
})
export class QstSortComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}



/**评分题 7 */
@Component({
    selector: 'qst-score',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <span *ngIf="qst.mustFill">必填</span>
        </div>
        <div class="qst-item-content">
            <textarea ([ngModel])="value"></textarea>
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
            <span *ngIf="qst.mustFill">必填</span>
        </div>
        <div class="qst-item-content">
            <textarea ([ngModel])="value"></textarea>
        </div>
    `
})
export class QstMatrixComponent {
    @Input() qst: Question;
    @Input() active: boolean;

    value;
}



/**图片题 9 */
@Component({
    selector: 'qst-pic',
    template: `
        <div class="qst-item-hd">
            <input class="name-input" [class]="active ? 'active':''" [(ngModel)]="qst.name" name="name">
            <span *ngIf="qst.mustFill">必填</span>
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
            <span *ngIf="qst.mustFill">必填</span>
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
            <span *ngIf="qst.mustFill">必填</span>
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
            <span *ngIf="qst.mustFill">必填</span>
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
            <span *ngIf="qst.mustFill">必填</span>
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
            <span *ngIf="qst.mustFill">必填</span>
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
            <span *ngIf="qst.mustFill">必填</span>
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
