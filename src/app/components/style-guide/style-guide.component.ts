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
  }

  onReset() {
    this.exampleForm.reset();
  }

}
