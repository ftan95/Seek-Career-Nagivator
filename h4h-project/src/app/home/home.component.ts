import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../services/rest.service';
import {AuthService} from '../services/auth.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  errorMessage: string;

  constructor(
    private readonly rest: RestService,
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder
  ) { 
    this.loginForm = this.fb.group({
      user: '',
      password: ''
    })
  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'user': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const form = this.loginForm.value;
    return this.rest.post(environment.apiURL, form.user, form.password)
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

}
