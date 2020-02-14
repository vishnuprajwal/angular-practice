import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  value1: string = "";
  todayDate: number = Date.now();


  constructor() {
  }

  ngOnInit(): void {

    this.todayDate = Date.now();
    this.write();
  }

   write(): string {
    return this.value1 += "a";
  }
  // added one line code
  // added one line code
}
