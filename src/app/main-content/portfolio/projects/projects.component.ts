import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { NgxTranslateModule } from '../../../translate/translate.module';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgxTranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: "DABubble",
      link: "https://dabubble.dogan-celik.com",
      githublink: "https://github.com/Dogan36/dabubble",
      stack: ["Angular", "TypeScript", "Material Design", "Firebase"],
      description: "A dynamic Q&A platform for community discussions and knowledge sharing, with account creation, built with Angular and Firebase.",
      imgname: "dabubble",
    },
    {
      name: "Join",
      link: "https://join.dogan-celik.com",
      githublink: "https://github.com/Dogan36/join_v2_frontend",
      stack: ["Vue", "CSS", "Django Rest Framework", "PostgreSQL"],
      description: "Task manager inspired by the Kanban System. Create and organize tasks in different workspaces using drag and drop functions, assign users and categories.",
      imgname: "join",
    },
    {
      name: "El Pollo Loco",
      link: "https://dogan-celik.developerakademie.net/el-pollo-loco/index.html",
      githublink: "https://github.com/Dogan36/el-pollo-loco",
      stack: ["HTML", "CSS", "JavaScript"],
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      imgname: "elpolloloco"
    },
    
  ]
}
