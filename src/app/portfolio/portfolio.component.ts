import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects = [
    { image: '', title: '', languages: '', description: '' },
    { image: '', title: '', languages: '', description: '' },
    { image: '', title: '', languages: '', description: '' },
    { image: '', title: '', languages: '', description: '' },
    { image: '', title: '', languages: '', description: '' },
  ];

}
