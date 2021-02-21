import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SurveyService} from '../services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  activities = []

  constructor(private readonly route: Router, public activityService: SurveyService) { }

  ngOnInit(): void {
    this.activities = this.activityService._activities;
    this.activityService.surveyUpdated.subscribe(act => {
      this.activities = act;
    });
  }

  onSubmit() {
    console.log("done");
    // this.route.navigate(['/home']);
  }

}
