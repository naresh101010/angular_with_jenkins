import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private ar: ActivatedRoute) {}
  ngOnInit(): void {
    this.ar.data.subscribe((v) => {
      console.log(v);
    });
  }

  test = 'tfsfsf56565est';
}
