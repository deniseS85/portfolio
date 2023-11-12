import { Component, OnInit } from '@angular/core';
import { IconsService } from '../icons.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})



export class AboutMeComponent {
/*   nativeElement: any; */
 
  constructor(public is: IconsService) {}
}
