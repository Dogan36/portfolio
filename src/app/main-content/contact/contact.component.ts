import { Component, inject, Renderer2, ElementRef } from '@angular/core';
import { NgxTranslateModule } from '../../translate/translate.module';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgxTranslateModule, ReactiveFormsModule, NgIf, NgClass, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  myForm: FormGroup;
  mailTest = false;
  http = inject(HttpClient)
  isVisibile: boolean = false

  constructor(private fb: FormBuilder, private renderer: Renderer2,
    private el: ElementRef,) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      agreement: [false, Validators.requiredTrue],
    });
  }

  post = {
    endPoint: 'https://dogan-celik.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),

    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text',
    },
  };

  onSubmit() {
    if (this.myForm.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.myForm.value))
        .subscribe({
          next: (response) => {
            this.myForm.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.showConfirmation()

        });
    }
  }

  get nameError() {
    const nameControl = this.myForm.get('name');
    if (nameControl?.hasError('required')) {
      return 'Your name is required.';
    }
    return '';
  }

  get emailError() {
    const emailControl = this.myForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'Your email is required.';
    }
    if (emailControl?.hasError('email')) {
      return 'Invalid email format.';
    }
    return '';
  }

  get messageError() {
    const messageControl = this.myForm.get('message');
    if (messageControl?.hasError('required')) {
      return 'Your message is empty';
    }
    return '';
  }

  get agreementError() {
    const agreementControl = this.myForm.get('agreement');
    if (agreementControl?.hasError('requiredTrue')) {
      return '';
    }
    return 'Please accept the privacy policy';
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView();
    }
  }

  showConfirmation() {
    this.isVisibile = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    setTimeout(() => {
      this.isVisibile = false
      this.renderer.removeStyle(document.body, 'overflow');
    }, 3000);
  }
}