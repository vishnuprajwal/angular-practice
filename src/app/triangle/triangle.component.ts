import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-triangle',
	templateUrl: './triangle.component.html',
	styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

	value1: number = 0;
	value2: number = 0;
	value3: number = 0;
	triAngleResult:number = 0;

	constructor() { }

	ngOnInit(): void {

	}

	tirFormula(a, b, c): number {

		var perimeter = Number(a) + Number(b) + Number(c) / 2;

		var area = Math.sqrt(Number(perimeter) * (Number((perimeter - a)) * Number((perimeter - b)) * Number((perimeter - c))));

		return area;
	}

	calculateTriangle(): any {

		this.triAngleResult = this.tirFormula(this.value1, this.value2, this.value3);
	}

}
