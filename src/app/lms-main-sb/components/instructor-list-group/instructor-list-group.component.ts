import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-instructor-list-group',
  templateUrl: './instructor-list-group.component.html',
  styleUrls: ['./instructor-list-group.component.css']
})
export class InstructorListGroupComponent implements OnInit {
  @Input() instructors?: User[];
  @Output() instructorsOutput: User[] = this.instructors;
  constructor() { }

  ngOnInit(): void {
  }

}
