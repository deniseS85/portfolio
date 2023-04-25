import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  currentActive: number = 0;

  public scroll(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }


@HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    console.log(window.pageYOffset); 
    if (window.pageYOffset > 734 && window.pageYOffset < 1297) {
      this.currentActive = 1;
    } else if (window.pageYOffset > 1298 && window.pageYOffset < 1851) {
      this.currentActive = 2;
    } else if (window.pageYOffset > 1852 && window.pageYOffset < 4307) {
      this.currentActive = 3;
    } else {
      this.currentActive = 0;
    }
  }
}



