import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  iconColor: string = '#aaaaaa';

  constructor(
    private route: ActivatedRoute,
    router: Router
  ) {    
  }

  ngOnInit(): void {
  }

}
