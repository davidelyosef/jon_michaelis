import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

}
