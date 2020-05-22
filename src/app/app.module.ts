import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PageListComponent } from './page-list/page-list.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { PageEditModule } from './page-edit/page-edit.module';
import { PageViewComponent } from './page-view/page-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { IconDefinition } from '@ant-design/icons-angular';

registerLocaleData(zh);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition
}
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    PageEditComponent,
    PageViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    PageEditModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, { provide: NZ_ICONS, useValue: icons}],
  bootstrap: [AppComponent]
})
export class AppModule { }
