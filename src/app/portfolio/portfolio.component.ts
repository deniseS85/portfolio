import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects = [
      { 
        image: 'assets/img/join-photo.png', 
        title: 'Join', 
        languages: 'JavaScript | HTML | CSS | GIT', 
        description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        linkLiveTest: '',
        linkGitHub: 'https://github.com/deniseS85/Join-Kanban' 
      },
      { 
        image: 'assets/img/pollo_loco-photo.png', 
        title: 'El Pollo Loco', 
        languages: 'JavaScript | HTML | CSS', 
        description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and bottles to fight against the chicken boss.',
        linkLiveTest: '',
        linkGitHub: 'https://github.com/deniseS85/El-Pollo-Loco' 
      },
      { 
        image: 'assets/img/pokedex-photo.png', 
        title: 'Pokédex', 
        languages: 'JavaScript | HTML | CSS | Api', 
        description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.', 
        linkLiveTest: '',
        linkGitHub: 'https://github.com/deniseS85/Pokedex' 
      },
      { 
        image: 'assets/img/crm-photo.png', 
        title: 'Simple CRM', 
        languages: 'Angular | Firebase', 
        description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
        linkLiveTest: '',
        linkGitHub: 'https://github.com/deniseS85/Pokedex'
    },
      { 
        image: 'assets/img/join-photo.png', 
        title: 'Shopping List', 
        languages: 'JavaScript | HTML | CSS', 
        description: 'A personalised shopping list that allows you to quickly and easily select, modify and move products to the shopping basket by clicking on the product image. These can be sent directly via Whatsapp.', 
        linkLiveTest: '',
        linkGitHub: 'https://github.com/deniseS85/Einkaufsliste'
      },
  ];
}



