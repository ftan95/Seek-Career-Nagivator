import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  formDisabled: boolean = true;

  constructor(private readonly route: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'retype': new FormControl(null, Validators.required)
    });

    this.signupForm.valueChanges.subscribe(
      (value) => {
        if (value.password === value.retype && value.password !== null && value.retype !== null) {
          this.formDisabled = false;
        }
        else {
          this.formDisabled = true;
        }
      }
    );
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  cancel() {
    this.route.navigate(["/login"]);
  }

}
