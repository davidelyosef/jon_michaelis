import { Component, OnInit } from '@angular/core';
import { Painting } from 'src/modals/painting';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss']
})
export class PaintingsComponent implements OnInit {
  public paintings: Painting[];

  constructor() { }

  ngOnInit() {
    fetch('assets/json/paintings.json').then(data => data.json())
    .then(paintings => this.paintings = paintings);
  }

}
