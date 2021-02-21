import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule, Router} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { BusinessComponent } from './business/business.component';
import { FinanceComponent } from './finance/finance.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: HomeComponent,
    data: {
      title: 'login Page'
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Sign up page'
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
    path: 'category',
    component: CategoryComponent,
    data: {
      title: 'Category'
    }
  },
  {
    path: 'business',
    component: BusinessComponent,
    data: {
      title: 'Business'
    }
  },
  {
    path: 'finance',
    component: FinanceComponent,
    data: {
      title: 'Finance'
    }
  },
  {
    path: 'consulting',
    component: ConsultingComponent,
    data: {
      title: 'Consulting'
    }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionsComponent,
    CategoryComponent,
    BusinessComponent,
    FinanceComponent,
    ConsultingComponent,
    SignupComponent
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
