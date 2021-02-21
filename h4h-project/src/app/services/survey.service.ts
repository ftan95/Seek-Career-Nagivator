import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

interface Activity {
    activity: string,
    id: number
}

@Injectable({
    providedIn: 'root'
})
export class SurveyService {
    activities: Activity[] = [
        {activity: "Inventing new products & things", id: 1},
        {activity: "Think deeply and ponder life", id: 2},
        {activity: "Fiction writing", id: 3},
        {activity: "Work in office", id: 4},
        {activity: "Working with computers", id: 5},
        {activity: "Work with other people", id: 6},
        {activity: "Helping people with emotions", id: 7},
        {activity: "Discover medical advancements", id: 8},
        {activity: "Improving climate change & environment", id: 9},
        {activity: "Building or repairing items", id: 10},
    ];

    surveyUpdated = new Subject<Activity[]>();

    constructor(private router: Router) {}

    get _activities() {
        return this.activities.slice();
    }
}