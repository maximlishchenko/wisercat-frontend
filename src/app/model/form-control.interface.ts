import { Validators } from "@angular/forms";

export interface IFormControl {
    name: string;
    label: string;
    type: string;
    validators: Validators;
}