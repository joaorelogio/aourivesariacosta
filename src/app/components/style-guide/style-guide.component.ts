import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormValidators } from '../../services/form-validators.service';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {

  exampleForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createExampleForm();
  }

  createExampleForm() {
    this.exampleForm = this.fb.group({
      inputExample: new FormControl('', [Validators.required]),
      emailExample: new FormControl('', [Validators.required, Validators.email]),
      passwordExample: new FormControl('', [Validators.required, Validators.minLength(8)]),
      selectExample: new FormControl('', [Validators.required]),
      textareaExample: new FormControl('', [Validators.required]),
      checkbox1Example: new FormControl(false, [Validators.requiredTrue]),
      checkbox2Example: new FormControl(false, [Validators.requiredTrue]),
      radioExample: new FormControl('', [Validators.required]),
      checkbox1ColumnExample: new FormControl(false, [Validators.requiredTrue]),
      checkbox2ColumnExample: new FormControl(false, [Validators.requiredTrue]),
      checkbox3ColumnExample: new FormControl(false, [Validators.requiredTrue]),
      radioColumnExample: new FormControl('', [Validators.required]),
      checkbox1InlineExample: new FormControl(false, [Validators.requiredTrue]),
      checkbox2InlineExample: new FormControl(false, [Validators.requiredTrue]),
      checkbox3InlineExample: new FormControl(false, [Validators.requiredTrue]),
      radioInlineExample: new FormControl('', [Validators.required]),
      switchExample: new FormControl(false, [Validators.requiredTrue]),
      switchRoundExample: new FormControl(false, [Validators.requiredTrue])
    });
  }

  onReset() {
    this.exampleForm.reset();
  }

}
