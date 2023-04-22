import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  skillsNames = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 
                'CSS', 'Rest-Api', 'Scrum', 'Material Design'];
  skillsIcons = ['angular-icon.png', 'typescript-icon.png', 'javascript-icon.png',
                'html-icon.png', 'firebase-icon.png', 'git-icon.png', 'css-icon.png',
                'rest-api-icon.png', 'scrum-icon.png', 'material-design-icon.png'];

}
