import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { openModal, closeModal, previousImage, nextImage, onKeyUp } from 'src/app/global';
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
  public painting: any = {};
  @ViewChild('artworkModal', { static: false }) artworkModal: ElementRef;
  // modal states

  public openModal = openModal;
  public closeModal = closeModal;
  public previousImage = previousImage;
  public nextImage = nextImage;
  public onKeyUp = onKeyUp;


  constructor() { }

  ngOnInit() {
    fetch('assets/json/paintings.json').then(data => data.json())
      .then(paintings =>
        paintings.map(painting => {
          this.paintings = paintings;
          if (painting.category === 'splash') this.splash.push(painting);
          else if (painting.category === 'tv cartoons') this.tvCartoons.push(painting);
          // else this.paintings.push(painting);
        })
      );
  }

}
