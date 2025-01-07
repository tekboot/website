import { Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { CareerDetailsComponent } from './career-details/career-details.component';
import { CareerTopicComponent } from './career-topic/career-topic.component';
import { CareerTopicDetailsComponent } from './career-topic-details/career-topic-details.component';

export const routes: Routes = [
  { path: 'career', component: CareerComponent },
  { path: 'career-details/:projectName', component: CareerDetailsComponent },
  { path: 'career-topic', component: CareerTopicComponent },
  { path: 'career-topic/:skill', component: CareerTopicDetailsComponent }, 
  { path: '', redirectTo: 'career', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'career' } 
];
