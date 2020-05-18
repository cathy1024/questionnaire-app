import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageEditRoutingModule } from './page-edit-routing.module';
import { ItemsComponent } from './items/items.component';
import { StylesComponent } from './styles/styles.component';
import { SettingComponent } from './setting/setting.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SubSidebarComponent } from './components/sub-sidebar/sub-sidebar.component';
import { QstBoardComponent } from './qst-board/qst-board.component';

import { QstRadioComponent, QstCheckboxComponent, QstTextComponent, QstTextareaComponent, QstCascaderComponent, QstDateComponent, QstDescComponent, QstFileComponent, QstFillComponent, QstMatrixComponent, QstPicComponent, QstProportionComponent, QstScoreComponent, QstSelectComponent, QstSortComponent } from './qst-board/components/qst.type.component';

import {MatDialogModule} from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ItemsComponent, StylesComponent, SettingComponent, SidebarComponent, SubSidebarComponent, QstBoardComponent, QstRadioComponent, QstCheckboxComponent, QstTextComponent, QstTextareaComponent, QstCascaderComponent, QstDateComponent, QstDescComponent, QstFileComponent, QstFillComponent, QstMatrixComponent, QstPicComponent, QstProportionComponent, QstScoreComponent, QstSelectComponent, QstSortComponent],
  imports: [
    CommonModule,
    PageEditRoutingModule,
    FormsModule, MatDialogModule, DragDropModule
  ],
  exports: [SidebarComponent, MatDialogModule, DragDropModule]
})
export class PageEditModule { }
