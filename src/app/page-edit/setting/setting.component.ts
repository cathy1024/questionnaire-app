import { Component, OnInit } from '@angular/core';
import { SettingMenu } from './setting.config';

interface menu {
  name: string,
  id: number
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent implements OnInit {
  settingMenu: menu[];

  constructor() { 
    this.settingMenu = SettingMenu;
  }

  ngOnInit(): void {
  }

  getSubSidebar (e) {
    
  }

}
