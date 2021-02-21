import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule, Router} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'option',
    component: OptionsComponent,
    data: {
      title: 'Options'
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
