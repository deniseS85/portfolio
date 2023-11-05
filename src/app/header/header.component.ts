import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { IconsService } from '../icons.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
 
})

export class HeaderComponent {
  
  constructor(private viewportScroller: ViewportScroller, public is: IconsService) {}

  currentActive: number = 0;
  @ViewChild('navResponsiv') navResponsiv!: ElementRef;


  @HostListener('window:scroll', ['$event'])
    checkOffsetTop() {
      
      if (window.pageYOffset > 635 && window.pageYOffset < 1254) {
        this.currentActive = 1;
      } else if (window.pageYOffset > 1255 && window.pageYOffset < 1851) {
        this.currentActive = 2;
      } else if (window.pageYOffset > 1852 && window.pageYOffset < 3933) {
        this.currentActive = 3;
      } else {
        this.currentActive = 0;
      }
  }  


  public scroll(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);

  }
}







