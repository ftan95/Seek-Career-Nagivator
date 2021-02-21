import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private readonly route: Router) { }

  ngOnInit(): void {
  }

  user = {
    photo:"../../assets/home.png",
    name:"",
    email:"",
    school:"",
    major:""
  };
  name:string = "John Smith";
  email:string = "John.Smith@gmail.com";
  school:string = "Santa Clara University ";
  major:string = "Finance";
  surveyResult: Array<string> = ['finance', 'coomputer science', 'film', 'math', 'physics','art','medical'];
  careerInterst: Array<string> = ['finance', 'coomputer science', 'film', 'math', 'physics'];
  isEdit = false

}
