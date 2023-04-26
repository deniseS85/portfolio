import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  constructor() { }

  logo = 'assets/img/logo.png';

  infoIcons = [
    {
      image: 'assets/img/github.icon.png',
      url: 'https://github.com/deniseS85'
    },
    {
      image: 'assets/img/mail-icon.png',
      url: '#contact'
    },
    {
      image: 'assets/img/linkedin-icon.png',
      url: 'https://www.linkedin.com/in/denise-siegl-708020274'
    }
   
  ]

  
}
