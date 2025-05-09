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
      name: "Videoflix",
      link: "https://videoflix.dogan-celik.com",
      github: {
        frontend: "https://github.com/Dogan36/videoflix_frontend",
        backend: "https://github.com/Dogan36/videoflix_backend",
      },
      stack: ["React", "Python", "Django Rest Framework", "PostgreSQL", "Docker", "Ubuntu"],
      description: "A Netflix-inspired streaming platform with user authentication, a custom video player, dynamic movie categories, and seamless API integration between Django and React, deployed using Docker on an Ubuntu server.",
      imgname: "videoflix",
    },
    {
      name: "Coderr",
      link: "https://coderr.dogan-celik.com",
      githublink: "https://github.com/Dogan36/coderr_backend",
      stack: ["Python", "Django Rest Framework", "Google Cloud", "Ubuntu"],
      description: "A backend API built with Django Rest Framework, providing secure token-based authentication, a scalable structure for frontend integration, and deployed on an Ubuntu environment.",
      imgname: "coderr",
    },
    {
      name: "Join",
      link: "https://join.dogan-celik.com",
      github: {
        frontend: "https://github.com/Dogan36/join_v2_frontend",
        backend: "https://github.com/Dogan36/join_backend_v2",
      },
      stack: ["Vue", "CSS", "Django Rest Framework", "PostgreSQL", "Google Cloud", "Ubuntu"],
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      imgname: "join",
    },
    {
      name: "DABubble",
      link: "https://dabubble.dogan-celik.com",
      githublink: "https://github.com/Dogan36/dabubble",
      stack: ["Angular", "TypeScript", "Material Design", "Firebase"],
      description: "A dynamic Q&A platform for community discussions and knowledge sharing, with account creation, built with Angular and Firebase.",
      imgname: "dabubble",
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
