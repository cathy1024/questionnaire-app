import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() newItemEvent = new EventEmitter<string>();

  addQst (item) {
    this.newItemEvent.emit(item);
  }

}
