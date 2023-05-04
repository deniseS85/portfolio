import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { IconsService } from '../icons.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  nativeElement: any;

  constructor(private viewportScroller: ViewportScroller, public is: IconsService) {}
  
  
  public scroll(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }


}
