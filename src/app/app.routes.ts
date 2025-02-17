import { Routes } from '@angular/router';
import {CoursesComponent} from './pages/courses/courses.component';
import {UsersComponent} from './pages/users/users.component';

export const routes: Routes = [
  {
    path: 'courses/breadcrumbs/courses',
    component: CoursesComponent
  },

  {
    path: 'courses/breadcrumbs/persons',
    component: UsersComponent
  },

  {
    path: '',
    redirectTo: '/courses/breadcrumbs/courses',
    pathMatch: 'full'
  }
];
