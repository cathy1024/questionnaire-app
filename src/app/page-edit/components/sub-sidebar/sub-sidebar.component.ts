import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sub-sidebar',
  templateUrl: './sub-sidebar.component.html',
  styleUrls: ['./sub-sidebar.component.less']
})
export class SubSidebarComponent implements OnInit {
  @Input() items;
  constructor() { }

  ngOnInit(): void {
  }

}
