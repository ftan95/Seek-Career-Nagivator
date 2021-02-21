import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {career} from '../../assets/career.js';
import {FieldService} from '../services/field.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {

  constructor(private readonly route: Router, private fieldSerivce: FieldService) { }

  ngOnInit(): void {
    console.log(this.fieldSerivce.data);
    this.category = this.fieldSerivce.data;
  }
  careerList: object = career;
  myCategory: number = 1;
  // category: object = {
  //   0:'Engineering',
  //   1:'Business',
  //   2:'Art & Sciences'
  // }

  category: string;

}
