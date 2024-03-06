import { Component } from '@angular/core';
import { NgxTranslateModule } from '../translate/translate.module';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgxTranslateModule, ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  myForm: FormGroup;
  rotationClass = '';

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      agreement: [false, Validators.requiredTrue],
    });
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

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted successfully!');
      // Hier kannst du die Logik für die erfolgreiche Formularübermittlung hinzufügen
    } else {
      console.log('Form has errors!');
      // Hier kannst du die Logik für die Behandlung von Formularfehlern hinzufügen
    }
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView();
     
    }
  }
}
