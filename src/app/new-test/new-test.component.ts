import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['../../demo-styling.css']
})

export class NewTestComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      client: ['', Validators.required],
      molecule: ['', Validators.required],
      numberOfLots: ['', [Validators.required, Validators.min(1)]]
    });
   }

   submitForm() {
    if (this.form.valid) {
      // Handle form submission logic here
      console.log('Form submitted');
    } else {
      // Handle invalid form submission, display error messages, etc.
    }
  }

  ngOnInit(): void {
  }

}
