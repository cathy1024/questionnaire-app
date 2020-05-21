import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  iconColor: string = '#aaaaaa';

  constructor(
    private route: ActivatedRoute
  ) {    
    console.log(this.route);
  }

  ngOnInit(): void {
  }

}
