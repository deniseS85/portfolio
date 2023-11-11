import { Component} from '@angular/core';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  isHover: any;
 
  constructor() {}
  
  skills = [
    { 
      name: 'Angular', 
      icon: 'angular-icon.png', 
      color_hover: 'brightness(0) saturate(100%) invert(18%) sepia(78%) saturate(3068%) hue-rotate(341deg) brightness(101%) contrast(98%)' 
    },
    { 
      name: 'TypeScript', 
      icon: 'typescript-icon.png', 
      color_hover: 'brightness(0) saturate(100%) invert(35%) sepia(97%) saturate(546%) hue-rotate(174deg) brightness(95%) contrast(87%)'
    },
    { 
      name: 'JavaScript', 
      icon: 'javascript-icon.png',
      color_hover: 'brightness(0) saturate(100%) invert(82%) sepia(53%) saturate(809%) hue-rotate(358deg) brightness(99%) contrast(98%)' 
    },
    { 
      name: 'HTML', 
      icon: 'html-icon.png',
      color_hover: 'brightness(0) saturate(100%) invert(43%) sepia(85%) saturate(3769%) hue-rotate(351deg) brightness(104%) contrast(94%)'
    },
    { 
      name: 'Firebase', 
      icon: 'firebase-icon.png',
      color_hover: 'brightness(0) saturate(100%) invert(95%) sepia(43%) saturate(7497%) hue-rotate(332deg) brightness(100%) contrast(94%)'
    },
    { 
      name: 'GIT', 
      icon: 'git-icon.png',
      color_hover: 'brightness(0) saturate(100%) invert(35%) sepia(100%) saturate(730%) hue-rotate(332deg) brightness(95%) contrast(101%)'
    },
    { 
      name: 'CSS', 
      icon: 'css-icon.png',
      color_hover: 'brightness(0) saturate(100%) invert(18%) sepia(69%) saturate(6183%) hue-rotate(220deg) brightness(89%) contrast(103%)'
    },
    { 
      name: 'Rest-Api', 
      icon: 'rest-api-icon.png',
      color_hover: 'brightness(0) saturate(100%) invert(93%) sepia(69%) saturate(4208%) hue-rotate(163deg) brightness(100%) contrast(92%)' 
    },
    { 
      name: 'Scrum', 
      icon: 'scrum-icon.png',
      color_hover: 'brightness(0) saturate(100%) invert(39%) sepia(60%) saturate(681%) hue-rotate(161deg) brightness(97%) contrast(92%)' 
    },
    { 
      name: 'Material', 
      icon: 'material-design-icon.png',
      color_hover: 'brightness(0) saturate(100%) invert(84%) sepia(0%) saturate(666%) hue-rotate(354deg) brightness(93%) contrast(79%)' 
    },
  ];
}
