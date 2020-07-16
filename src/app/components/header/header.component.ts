import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuDropDown', { static: false }) menuDropDomn: ElementRef
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      let header = document.getElementById('logo');
      if (window.scrollY > 500) {
        header.style.position = 'sticky';
        header.style.top = '0';
        header.classList.add('animated', 'slideInDown');
      }
    })
  }

  public openDropDownMenu() {
    if (this.menuDropDomn.nativeElement.style.display === "block")
      this.menuDropDomn.nativeElement.style.display = "none";
    else this.menuDropDomn.nativeElement.style.display = "block"
  }

}
