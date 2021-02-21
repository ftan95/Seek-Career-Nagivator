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
  
  surveyResult: Array<string> = ['Biologist', 'Researcher', 'Historian', 'Astronomist', 'Product Management','SEO Specialist','Web Designer'];
  careerInterst: Array<string> = ['Web Developer', 'Aerospace Industry', 'Structural Engineer', 'Credit Analyst', 'Recruiter', 'Consulting'];
  isEdit = false;

  onFileChanged(event) {
    
  }


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
  topResult(i) {
    if (i <= 2){
      return 'topResult'
    } else {
      return''
    }
  }

}
