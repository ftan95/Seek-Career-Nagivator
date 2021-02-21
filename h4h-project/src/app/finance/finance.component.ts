import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor(private readonly route: Router) { }

  ngOnInit(): void {
  }

}
