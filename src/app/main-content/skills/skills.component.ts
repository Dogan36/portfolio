import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NgxTranslateModule } from '../../translate/translate.module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgxTranslateModule, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = [
    {
      skill: "Angular",
      img: "assets/img/skills/angular.png",
    },
    {
      skill: "Vue",
      img: "assets/img/skills/vue-logo.png",
    },
    {
      skill: "React",
      img: "assets/img/skills/react-logo.png",
    },

    {
      skill: "TypeScript",
      img: "assets/img/skills/typescript.png",
    },
    {
      skill: "JavaScript",
      img: "assets/img/skills/javascript.png",
    },
    {
      skill: "Python",
      img: "assets/img/skills/python-logo.png",
    },
    {
      skill: "HTML",
      img: "assets/img/skills/html.png",
    },
    {
      skill: "DRF",
      img: "assets/img/skills/django.png",
    },
    {
      skill: "Google Cloud",
      img: "assets/img/skills/googlecloud.png",
    },
    {
      skill: "PostgreSQL",
      img: "assets/img/skills/postgresql-logo.png",
    },
    {
     skill: "Ubuntu",
     img: "assets/img/skills/ubuntu.png",
   },
    {
      skill: "Firebase",
      img: "assets/img/skills/firebase.png",
    },
    {
      skill: "GIT",
      img: "assets/img/skills/git.png",
    },
    {
      skill: "CSS",
      img: "assets/img/skills/css.png",
    },
    {
      skill: "Rest Api",
      img: "assets/img/skills/api.png",
    },
    {
      skill: "Scrum",
      img: "assets/img/skills/scrum.png",
    },
    {
      skill: "Material Design",
      img: "assets/img/skills/materialdesign.png",
    },
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  onMouseOver(event: Event, skill: { skill: any; }): void {
    const element = (event.currentTarget as HTMLElement);
    if (element) {
      element.style.gap = '20px';
    }
  }

  onMouseOut(event: Event, skill: { skill: any; }): void {
    const element = (event.currentTarget as HTMLElement);
    if (element) {
      element.style.gap = '10px'
    }
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView();
    }
  }

  calculateAosOffset(index: number): number {
    return 30 + (index * 1000);
  }
}
