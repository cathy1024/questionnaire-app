import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageEditRoutingModule } from './page-edit-routing.module';
import { ItemsComponent } from './items/items.component';
import { StylesComponent } from './styles/styles.component';
import { SettingComponent } from './setting/setting.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SubSidebarComponent } from './components/sub-sidebar/sub-sidebar.component';

@NgModule({
  declarations: [ItemsComponent, StylesComponent, SettingComponent, SidebarComponent, SubSidebarComponent],
  imports: [
    CommonModule,
    PageEditRoutingModule
  ],
  exports: [SidebarComponent]
})
export class PageEditModule { }
