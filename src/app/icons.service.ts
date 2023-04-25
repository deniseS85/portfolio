import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  infoIcons = ['assets/img/github.icon.png', 'assets/img/mail-icon.png', 'assets/img/linkedin-icon.png'];
  logo = 'assets/img/logo.png';
  constructor() { }
}
