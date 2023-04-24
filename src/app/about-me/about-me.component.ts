import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  
  public scroll(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
