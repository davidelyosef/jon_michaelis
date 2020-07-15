import { Component, OnInit } from '@angular/core';
import { Painting } from 'src/modals/painting';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss']
})
export class PaintingsComponent implements OnInit {
  public paintings: Painting[] = [];
  public splash: Painting[] = [];
  public tvCartoons: Painting[] = [];

  constructor() { }

  ngOnInit() {
    fetch('assets/json/paintings.json').then(data => data.json())
      .then(paintings =>
        paintings.map(painting => {
          if (painting.category === 'splash') this.splash.push(painting);
          else if (painting.category === 'tv cartoons') this.tvCartoons.push(painting);
          else this.paintings.push(painting);
        })
      );
  }

}
