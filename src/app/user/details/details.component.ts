import { Component, OnInit } from '@angular/core';

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

}
