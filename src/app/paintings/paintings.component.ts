import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Painting } from 'src/modals/painting';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss'],
  host: {
    '(document:keyup)': 'onKeyUp($event)'
  }
})
export class PaintingsComponent implements OnInit {
  public paintings: Painting[] = [];
  public tvCartoons: Painting[] = [];
  public painting: any = {};
  public index: number;
  public maxLength: number;
  public paintingsModal : Painting[] = [];

  @ViewChild('artworkModal', { static: false }) artworkModal: ElementRef;
  // modal states
 
  constructor() { }

  ngOnInit() {
    fetch('assets/json/paintings.json').then(data => data.json())
      .then(paintings =>
        paintings.map(painting => {
          if (painting.category === 'tv cartoons') this.tvCartoons.push(painting);
          else this.paintings.push(painting);
        })
      );
  }


//Modal Functions

  public openModal(paint){
    this.painting = paint;
    if (paint.category === 'tv cartoons'){
     this.paintingsModal = this.tvCartoons
    }
    else(this.paintingsModal = this.paintings);
    this.index = this.paintingsModal.indexOf(paint);
    this.maxLength = this.paintingsModal.length - 1;
    this.artworkModal.nativeElement.style.display = 'block';
  }

  public closeModal() {
    this.artworkModal.nativeElement.style.display = 'none';
  }
  
  public previousImage() {
    this.index--;
    if (this.index == 0) this.index = this.paintingsModal.length;
    this.painting = this.paintingsModal[this.index - 1];
  }
  
  public nextImage() {
    this.index++;
    if (this.index > this.maxLength) this.index = 0;
    this.painting = this.paintingsModal[this.index];
  }

// rrows + escape on keyboard
  public onKeyUp(ev: KeyboardEvent) {
    if (ev.key === "ArrowLeft") {
      this.index--;
      if (this.index == 0) this.index = this.paintingsModal.length - 1;
      this.painting = this.paintingsModal[this.index];
    }
  
    else if (ev.key === "ArrowRight") {
      this.index++;
      if (this.index + 1 > this.maxLength) this.index = -1;
      this.painting = this.paintingsModal[this.index];
    }
  
    else if (ev.key === "Escape") {
      this.artworkModal.nativeElement.style.display = 'none';
    }
  }

}
