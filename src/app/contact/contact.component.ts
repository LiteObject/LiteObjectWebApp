import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { PersonalData, ContactRequest } from './contact-request';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      personalData: this.formBuilder.group(new PersonalData()),
      text: new FormControl(null, [Validators.required, Validators.minLength(1)])
    });
  }

  // convenience getter for easy access to form fields
  get form() { return this.contactForm.controls; }

  onSubmit() {
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      console.log('Contact form is invalid.');
      return;
    }

    // Make sure to create a deep copy of the form-model
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    result.personalData = Object.assign({}, result.personalData);

    // Do useful stuff with the gathered data
    console.log(result);
  }

  revert() {
    // Resets to blank object
    this.contactForm.reset();

    // Resets to provided model
    this.contactForm.reset({ personalData: new PersonalData(), text: '' });
  }
}
