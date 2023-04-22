import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  skills = [
    { name: 'Angular', icon: 'angular-icon.png' },
    { name: 'TypeScript', icon: 'typescript-icon.png' },
    { name: 'JavaScript', icon: 'javascript-icon.png' },
    { name: 'HTML', icon: 'html-icon.png' },
    { name: 'Firebase', icon: 'firebase-icon.png' },
    { name: 'GIT', icon: 'git-icon.png' },
    { name: 'CSS', icon: 'css-icon.png' },
    { name: 'Rest-Api', icon: 'rest-api-icon.png' },
  ];
}
