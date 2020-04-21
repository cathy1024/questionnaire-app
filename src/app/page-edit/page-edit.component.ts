import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.less']
})
export class PageEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goBack () {
    window.history.go(-1);
  }

}
