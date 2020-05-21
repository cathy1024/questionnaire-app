import { Component, OnInit } from '@angular/core';
import { StyleMenu } from './style.config';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.less']
})
export class StylesComponent implements OnInit {
  styleMenu: any[];

  constructor() {
    this.styleMenu = StyleMenu;
   }

  ngOnInit(): void {
  }

  getSubSidebar (e) {
    
  }

}
