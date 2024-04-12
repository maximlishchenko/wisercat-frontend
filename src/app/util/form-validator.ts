import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
  })
export class CustomDummyValidator extends Validators {
    
    public capitalizedNameValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const firstCapitalizedReg = /[A-Z]/;
            
            const input = <string> control.value;
    
            let isValid = true;
            if (input?.length>1) {
                isValid = firstCapitalizedReg.test(input[0]);
            }
    
            return isValid ? null : { nameNotCapitalized: true };
        }
    }

    public restOfNameLowerCaseValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const restOfNameLowerCase = /^[a-zäöüõ]+$/;
            
            const input = <string> control.value;
    
            let isValid = true;
            if (input?.length>1) {
                isValid = restOfNameLowerCase.test(input.substring(1));
            }
            
            return isValid ?  null : { notFormattedName: true };
        }
    }

    public numberValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
          const value = control.value;
          const isNumber = !isNaN(value);
      
          return isNumber ? null : { notANumber: true };
        };
    }

    public decimalValidator(decimals: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
          const value = control.value;
          
          const regex = new RegExp(`^(\\d+(\\.\\d{1,${decimals}})?)$`);

    
          let isValid = true;
          if (value) {
            isValid = regex.test(value);
          }
    
          return isValid ? null : { invalidDecimalPlaces: true };
        };
    }
}