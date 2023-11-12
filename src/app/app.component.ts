import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(public router: Router) {}

  ngOnInit(): void {
    AOS.init({
      duration: 1000
    });

  }


  onActivate(event:any) {
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
  }
 
}



