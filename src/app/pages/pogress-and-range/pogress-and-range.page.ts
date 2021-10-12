import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pogress-and-range',
  templateUrl: './pogress-and-range.page.html',
  styleUrls: ['./pogress-and-range.page.scss'],
})
export class PogressAndRangePage implements OnInit {

    porcentaje: number = 0.40;

  constructor() { }

  ngOnInit() {
  }

}
