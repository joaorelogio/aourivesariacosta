import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidators extends Validators {

  static allPhoneNumber(control: AbstractControl) {
    const re = /(^[+]{1}[0-9]{3}[0-9]{9}$)|(^[0]{2}[0-9]{3}[0-9]{9}$)|(^[0-9]{9}$)/;
    return re.test(control.value) || !control.value ? null : { invalidPhoneNumber: true };
  }

}
