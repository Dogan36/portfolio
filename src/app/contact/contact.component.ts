import { Component, inject } from '@angular/core';
import { NgxTranslateModule } from '../translate/translate.module';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import AOS from 'aos';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgxTranslateModule, ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  myForm: FormGroup;
  mailTest = true;
http = inject(HttpClient)


  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      agreement: [false, Validators.requiredTrue],
    });
  }



  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
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
          complete: () => console.info('send post complete'),
        });
    } else if (this.myForm.valid && this.mailTest) {

      this.myForm.reset();
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
}
