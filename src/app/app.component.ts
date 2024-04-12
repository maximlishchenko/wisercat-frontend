import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./component/form/form.component";
import { Validators } from '@angular/forms';
import { CustomDummyValidator } from './util/form-validator';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormComponent]
})
export class AppComponent {
  title = 'wisercat-junior-front-assessment';

  constructor(
    private customDummyValidator: CustomDummyValidator
  ) {}

  controls = [
    {name: 'name', label: 'Name', type: 'text',
    validators: [
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(30), 
      this.customDummyValidator.capitalizedNameValidator(),  
      this.customDummyValidator.restOfNameLowerCaseValidator()
    ]},
    {name: 'surname', label: 'Surname', type: 'text',
    validators: [
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(30), 
      this.customDummyValidator.capitalizedNameValidator(), 
      this.customDummyValidator.restOfNameLowerCaseValidator()
    ]},
    {name: 'email', label: 'Email', type: 'email',
    validators: [
      Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.email
    ]},
    {name: 'experience', label: 'Working experience', type: 'number', 
    validators: [
      Validators.required, 
      Validators.min(0), 
      Validators.max(600), 
      this.customDummyValidator.numberValidator(), 
      this.customDummyValidator.decimalValidator(1)
    ]}
  ];
}
