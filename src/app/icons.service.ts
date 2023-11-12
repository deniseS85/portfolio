import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  constructor() { }

  logo = 'assets/img/logo.png';

  infoIcons = [
    {
      image: 'assets/img/github.png',
      url: 'https://github.com/deniseS85'
    },
    {
      image: 'assets/img/xing.png',
      url: 'https://www.xing.com/profile/Denise_Siegl05560/cv'
    },
    {
      image: 'assets/img/linkedin.png',
      url: 'https://www.linkedin.com/in/denise-siegl-708020274'
    },
    {
      image: 'assets/img/mail.png',
      url: 'mailto:denisabel78@hotmail.de'
    }
  ]
}
