import { Component } from '@angular/core';
import { NgFor, NgIf,} from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: "Ring of Fire",
      link: "https://dogan-celik.developerakademie.net/ringoffire/",
      githublink:"https://github.com/Dogan36/ringoffire",
      stack: ["HTML", "CSS", "JavaScript", "Firebase"],
      description: "testtesttest",
      imgname: "ringoffire",
      
    },
   /* {
      name: "El Pollo Loco",
      link: "https://dogan-celik.developerakademie.net/el-pollo-loco/index.html",
      stack: ["HTML", "CSS", "JavaScript"],
      description : "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen."
    },
    {
      name: "Pokedex",
      link: "https://dogan-celik.developerakademie.net/pkedex/index.html",
      stack: ["HTML", "CSS", "JavaScript", "Api"],
      description: "Based on the PokeAPI a simple library that provides and catalogues pokemon information."
    },
    {
      name: "Comming Soon",
      link: "https://google.de",
      stack:["HTMl"],
      description: "A very Simple Customer Relationship Management system working with CRUD functionality."
    },
    {
      name: "Ring of Fire",
      link: "https://dogan-celik.developerakademie.net/ringoffire/",
      stack: ["HTML", "CSS", "JavaScript", "Firebase"],
      description: "testtesttest",
      imgname: "ringoffire"
    },*/

  ]
}
