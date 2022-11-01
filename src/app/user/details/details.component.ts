import { Component, OnInit } from '@angular/core';
import { UserClass } from 'src/app/user-class';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  payments = ["200", "500", "1000"];

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new UserClass('', 'abc@abc.in',748474,'male','1999-12-03','',500, true)

}
