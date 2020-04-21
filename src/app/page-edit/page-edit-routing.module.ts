import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageEditComponent } from './page-edit.component'
import { ItemsComponent } from './items/items.component';
import { StylesComponent } from './styles/styles.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: 'edit/:id',
    component: PageEditComponent,
    children: [
      {
        path: '',
        component: ItemsComponent
      },
      {
        path: 'items',
        component: ItemsComponent
      },
      {
        path: 'styles',
        component: StylesComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageEditRoutingModule { }
