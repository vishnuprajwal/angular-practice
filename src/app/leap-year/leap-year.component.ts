import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leap-year',
  templateUrl: './leap-year.component.html',
  styleUrls: ['./leap-year.component.css']
})
export class LeapYearComponent implements OnInit {
  yyy: number = 0;
  LeapYearResult: boolean;


  constructor() { }

  ngOnInit(): void {
  }
  leapyearformula(yyy) {
    return ((yyy % 100 == 0) ? (yyy % 400 == 0) : (yyy % 4 == 0));
  }
  YearResult(): any {
    this.LeapYearResult = this.leapyearformula(this.yyy)

  }
}
