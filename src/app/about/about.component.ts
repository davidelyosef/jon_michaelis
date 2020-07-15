import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('artworkModal', { static: false }) artworkModal: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  public openModal() {

    this.artworkModal.nativeElement.style.display = 'block';

  }

  public closeModal() {

    this.artworkModal.nativeElement.style.display = 'none';
  }

}
