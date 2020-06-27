import { AbstractControl } from '@angular/forms';

export class UserFormsValidator {
    
    public static sameValue(otherControll: AbstractControl) {
        return (control: AbstractControl) => {
            if (control.value != otherControll.value) {
                return {dontmatch: true }
            }
            
            return null;
        }
    }

    
}