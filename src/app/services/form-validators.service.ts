import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidators extends Validators {

  static phoneNumber(control: AbstractControl) {
    const re = /(^[+]{1}[0-9]{3}[2]{1}[0-9]{8}$)|(^[0]{2}[0-9]{3}[2]{1}[0-9]{8}$)|(^[2]{1}[0-9]{8}$)/;
    return re.test(control.value) || !control.value ? null : { invalidPhoneNumber: true };
  }

}
