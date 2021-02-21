import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FieldService} from '../services/field.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private readonly route: Router, private fieldSerivce: FieldService) { }

  ngOnInit(): void {
  }

  setData(value: string) {
    this.fieldSerivce.sharedData = value;
  }

}
