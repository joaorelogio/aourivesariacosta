import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidators extends Validators {

  static MatchPassword(control: AbstractControl) {
    const password = control.get('pwd').value;
    const confirmPassword = control.get('confirm_pwd').value;
    if (password !== confirmPassword) {
      control.get('confirm_pwd').setErrors({ MatchPassword: true });
    } else {
      return null;
    }
  }

  static phoneNumber(control: AbstractControl) {
    const re = /(^[+]{1}[0-9]{3}[2]{1}[0-9]{8}$)|(^[0]{2}[0-9]{3}[2]{1}[0-9]{8}$)|(^[2]{1}[0-9]{8}$)/;
    return re.test(control.value) || !control.value ? null : { invalidPhoneNumber: true };
  }

}
