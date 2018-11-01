import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
      checkbox1Example: new FormControl('', [Validators.required]),
      checkbox2Example: new FormControl('', [Validators.required]),
      radioExample: new FormControl('', [Validators.required]),
      checkboxColumnExample: new FormControl('', [Validators.required]),
      radioColumnExample: new FormControl('', [Validators.required]),
      checkboxInlineExample: new FormControl('', [Validators.required]),
      radioInlineExample: new FormControl('', [Validators.required]),
      switchExample: new FormControl('', [Validators.required]),
      switchRoundExample: new FormControl('', [Validators.required])
    });
  }

  onReset() {
    this.exampleForm.reset();
  }

}
