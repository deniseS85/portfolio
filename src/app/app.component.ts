import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  onActivate(event:any) {
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
  }
  title = 'portfolio';

  constructor(public router: Router) {}
}



