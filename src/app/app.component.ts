import { Component, OnInit } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isLoading = true;

  ngOnInit(): void {
    // Wenn die App fertig initialisiert ist
    this.isLoading = false;
  }
}
