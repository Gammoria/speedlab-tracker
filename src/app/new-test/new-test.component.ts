import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
})

export class NewTestComponent implements OnInit {

  form: any = {};

  constructor(private http: HttpClient, private router: Router) {
    
  }

  submitForm(form: any) {
      const runData = {
        user: form.initials,
        client_number: form.client,
        molecule: form.molecule,
        property: form.property,
        lots: form.lots,
      }

      this.router.navigate(['/timer'], {state: {formData: runData}});

  }

  ngOnInit(): void {
  }

}
