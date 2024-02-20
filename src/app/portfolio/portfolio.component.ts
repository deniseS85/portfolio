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
        linkLiveTest: 'https://denise.selfcoders.com/join_kanban/',
        linkGitHub: 'https://github.com/deniseS85/Join-Kanban' 
      },
      { 
        image: 'assets/img/pollo_loco-photo.png', 
        title: 'El Pollo Loco', 
        languages: 'JavaScript | OOP | HTML | CSS', 
        description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and bottles to fight against the chicken boss.',
        linkLiveTest: 'https://denise.selfcoders.com/el_pollo_loco/',
        linkGitHub: 'https://github.com/deniseS85/El-Pollo-Loco' 
      },
      { 
        image: 'assets/img/crm-photo.png',
        title: 'Simple CRM', 
        languages: 'Angular | TypeScript | Firebase', 
        description: 'A very Simple Customer Relationship Management system working with CRUD functionality.', 
        linkLiveTest: 'https://denise.selfcoders.com/simple-crm/',
        linkGitHub: 'https://github.com/deniseS85/Simple_CRM' 
      },
      { 
        image: 'assets/img/dabubble-photo.png', 
        title: 'DA Bubble', 
        languages: 'Angular | TypeScript | Firebase', 
        description: 'Chat messenger inspired by Slack. Contact your colleagues and exchange ideas with them.', 
        linkLiveTest: 'https://denise.selfcoders.com/dabubble/',
        linkGitHub: 'https://github.com/deniseS85/DABubble'
      },
  ];
}



