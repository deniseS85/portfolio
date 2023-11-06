import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { IconsService } from '../icons.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller, public is: IconsService, @Inject(DOCUMENT) private document: Document) {}

  currentActive: number = 0;
  isMenuOpen: boolean = false;

  @ViewChild('navResponsiv') navResponsiv!: ElementRef;
  
  toggleBodyScroll(){
      this.isMenuOpen = this.navResponsiv.nativeElement.classList.contains('open');

      if (this.isMenuOpen) {
          this.document.body.style.overflow = 'hidden';
      } else {
          this.document.body.style.overflow = 'unset';
      }
  }

  closeMenu(): void {
      this.navResponsiv.nativeElement.classList.remove('open');
      this.isMenuOpen = false;
  }


  @HostListener('window:scroll', ['$event'])
    checkOffsetTop() {
      
      if (window.scrollY > 635 && window.scrollY < 1254) {
          this.currentActive = 1;
      } else if (window.scrollY > 1255 && window.scrollY < 1851) {
          this.currentActive = 2;
      } else if (window.scrollY > 1852 && window.scrollY < 3933) {
          this.currentActive = 3;
      } else if (window.scrollY > 3934) {
          this.currentActive = 4;
      } else {
          this.currentActive = 0;
      }
  }  


  public scroll(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }
  
}







