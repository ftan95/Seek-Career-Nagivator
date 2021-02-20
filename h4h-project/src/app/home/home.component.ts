import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
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

  // onSubmit() {
  //   const form = this.loginForm.value;
  // }

}
