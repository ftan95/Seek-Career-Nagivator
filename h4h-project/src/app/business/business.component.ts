import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {career} from '../../assets/career.js';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {

  constructor(private readonly route: Router) { }

  ngOnInit(): void {
  }
  careerList: object = career;
  myCategory: number = 1;
  category: object = {
    0:'Engineering',
    1:'Business',
    2:'Art & Sciences'
}
}
