import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sb-dashboard-card',
  templateUrl: './sb-dashboard-card.component.html',
  styleUrls: ['./sb-dashboard-card.component.css']
})
export class SbDashboardCardComponent implements OnInit {
  @Input() cardTitle;
  @Input() cardBootstrapColor;
  @Input() faIcon;
  @Input() navLinkString;
  constructor() { }

  ngOnInit(): void {
  }

}
