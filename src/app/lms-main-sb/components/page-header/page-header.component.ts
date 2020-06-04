import { Component, OnInit, Input } from '@angular/core';
import { PageHeaderModel } from './page-header.model';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})



export class PageHeaderComponent implements OnInit {
  @Input()pageHeaderModel: PageHeaderModel;

  breadCrums = '<h3>hello</h3>';
  constructor() { }

  ngOnInit(): void {
  }

}
