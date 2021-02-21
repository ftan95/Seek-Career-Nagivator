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
    photo:"../../assets/acm.png",
    name:"John Smith",
    email:"John.Smith@gmail.com",
    school:"Santa Clara University",
    major:"Finance"
  };
  // surveyResult: Array<string> = [];
  // careerInterst: Array<string> = [];
  surveyResult: Array<string> = ['finance', 'coomputer science', 'film', 'math', 'physics','art','medical'];
  careerInterst: Array<string> = ['finance', 'coomputer science', 'film', 'math', 'physics'];
  isEdit = false;


  searchCareer() {

  }
  rminterest(i) {
    this.careerInterst.splice(i,1);
  }
  editProfile() {
    this.isEdit = true;
  }
  sendEdited() {
    this.isEdit = false;
  }

}
