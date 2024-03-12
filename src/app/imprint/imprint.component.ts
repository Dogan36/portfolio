import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxTranslateModule } from '../translate/translate.module';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NgxTranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(public router:Router, public titleService: Title){
    this.titleService.setTitle("Dogan Celik | Imprint");
  }
  
}
