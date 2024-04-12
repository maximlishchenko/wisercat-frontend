import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from '../message/message.component';
import { IFormControl } from '../../model/form-control.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  dummyForm! : FormGroup;
  inputFocused = new Map();
  showMessage: string = '';

  constructor(private formBuilder: FormBuilder) {}

  @Input()
  controls: IFormControl[] = [];

  ngOnInit(): void {
    this.dummyForm = this.formBuilder.group({});

    this.controls?.forEach(control => {
      this.dummyForm.addControl(control.name, this.formBuilder.control('', control.validators));

      this.inputFocused.set(control.name, false);
    });
  }

  onFocus(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    this.inputFocused.set(`${target.id}`, true);
  }

  onBlur(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    this.inputFocused.set(`${target.id}`, false);
  }

  submitApplication(): void {
    if (this.dummyForm.valid) {
      this.setMessage('success');
    }
    else {
      this.setMessage('error');
    }
  }

  resetApplication(): void {
    this.dummyForm.reset({});
    this.setMessage('info');
  }
  
  setMessage(messageType: string): void {
    this.showMessage = messageType;
    setTimeout(() => {
      this.showMessage = '';
    }, 2500);
  }
}
