import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass} from '@angular/common';
import { NgxTranslateModule } from './../../translate/translate.module'


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, NgClass,  NgxTranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: "Join",
      link: "https://dogan-celik.developerakademie.net/join/login",
      githublink:"https://github.com/Dogan36/join",
      stack: ["HTML", "CSS", "JavaScript"],
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      imgname: "join",
      
    },
    {
      name: "El Pollo Loco",
      link: "https://dogan-celik.developerakademie.net/el-pollo-loco/index.html",
       githublink:"https://github.com/Dogan36/el-pollo-loco",
      stack: ["HTML", "CSS", "JavaScript"],
      description : "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      imgname: "elpolloloco"
    },
    {
      name: "Ring of Fire",
      link: "https://dogan-celik.developerakademie.net/ringoffire/",
      githublink:"https://github.com/Dogan36/ringoffire",
      stack: ["HTML", "CSS", "JavaScript", "Firebase"],
      description: "An online card drinking game for entertaining hours with friends. Developed with Firebase for seamless interactions.",
      imgname: "ringoffire",
    },
    
    {
      name: "Pokedex",
      link: "https://dogan-celik.developerakademie.net/pokedex/index.html",
      githublink:"https://github.com/Dogan36/Pokedex",
      stack: ["HTML", "CSS", "JavaScript", "Api"],
      description: "Based on the PokeAPI a simple library that provides and catalogues pokemon information.",
      imgname: "pokedex"
    },
  ]
}
