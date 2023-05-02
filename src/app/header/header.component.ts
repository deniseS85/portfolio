import { Component, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { IconsService } from '../icons.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements AfterViewInit {

  constructor(private viewportScroller: ViewportScroller, public is: IconsService) {}

  currentActive: number = 0;

  @ViewChild('myskills') myskills!: ElementRef;
  @ViewChild('myportfolio') myportfolio!: ElementRef;
  @ViewChild('myaboutme') myaboutme!: ElementRef;
  @ViewChild('mycontact') mycontact!: ElementRef;
 
  
  
  ngAfterViewInit() {

    console.log(this.myskills.nativeElement);
   /* 
    this.myskills = document.getElementById("myskills");
    this.myaboutme = document.getElementById("myaboutme");
    this.myportfolio = document.getElementById("myportfolio");
    this.mycontact = document.getElementById("contact"); */
  }

    
  @HostListener('window:scroll', ['$event'])
    checkOffsetTop() {
    
      let windowScrollTop = window.pageYOffset;
      /* let aboutMeTop = this.myaboutme.getBoundingClientRect().y; */
      /* let skillsTop = this.myskills.getBoundingClientRect().y; */
      /* let portfolioTop = this.myportfolio.getBoundingClientRect().y;
      let contactTop = this.mycontact.getBoundingClientRect().y; */
      
  /*  console.log(windowScrollTop);
   console.log(aboutMeTop);
   console.log(skillsTop); */
   /* console.log(portfolioTop);
   console.log(contactTop); */
      
/* 
   if (window.pageYOffset >= this.myaboutme && window.pageYOffset < this.myskills) {
    this.currentActive = 1;
  } else if (window.pageYOffset >= this.myskills && window.pageYOffset < this.myportfolio) {
    this.currentActive = 2;
  } else if (window.pageYOffset >= this.myportfolio && window.pageYOffset < this.mycontact) {
    this.currentActive = 3;
  } else if (window.pageYOffset >= this.mycontact) {
    this.currentActive = 4;
  } else {
    this.currentActive = 0;
  } *//* 
    if (window.pageYOffset > 635 && window.pageYOffset < 1254) {
      this.currentActive = 1;
    } else if (window.pageYOffset > 1255 && window.pageYOffset < 1851) {
      this.currentActive = 2;
    } else if (window.pageYOffset > 1852 && window.pageYOffset < 3933) {
      this.currentActive = 3;
    } else {
      this.currentActive = 0;
      
    } */
  }

  public scroll(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}





