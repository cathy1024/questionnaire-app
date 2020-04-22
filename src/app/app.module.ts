import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PageListComponent } from './page-list/page-list.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { PageEditModule } from './page-edit/page-edit.module';
import { PageViewComponent } from './page-view/page-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    PageEditComponent,
    PageViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    PageEditModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
