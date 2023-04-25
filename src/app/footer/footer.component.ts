import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { IconsService } from '../icons.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private viewportScroller: ViewportScroller, public is: IconsService) {}
  
  public scroll(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
