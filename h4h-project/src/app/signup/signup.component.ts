import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RestService} from '../services/rest.service';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  formDisabled: boolean = true;
  errorMessage: string;

  constructor(
    private readonly rest: RestService,
    private readonly auth: AuthService,
    private readonly router: Router) {
    
   }

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

  async onSubmit() {
    console.log(this.signupForm.value);
    const form = this.signupForm.value;
    let data = `{"name": "${form.user}","password": "${form.password}","email": "${form.email}"}`
    return this.rest.post("https://h4happ.herokuapp.com/signup", form)
    .then(res => {
      console.log(res);
      if (res.message == "Success") {
        // const userId = res[0].id;
        // this.auth.setUserId(userId);
        this.router.navigate(['/option']);
      }
      else {
        this.errorMessage = "Invalid username or password";
      }
    });
    
  }

  cancel() {
    this.router.navigate(["/login"]);
  }

}
