import { Component } from '@angular/core';
import {HeadingComponent} from '../../shared/heading/heading.component';
import {DropdownComponent} from '../../shared/ui/dropdown/dropdown.component';
import {IDropdownOptionInterface} from '../../shared/ui/dropdown/dropdown-option.interface';
import {InputComponent} from '../../shared/ui/inputs/input/input.component';
import {ICourseItem} from './components/course-item/course-item.interface';
import {MOCKED_COURSES} from './components/course-item/mock-data/courses-mock-data';
import {CourseItemComponent} from './components/course-item/course-item.component';
import {ButtonBrandComponent} from '../../shared/ui/buttons/button-brand/button-brand.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    HeadingComponent,
    DropdownComponent,
    InputComponent,
    CourseItemComponent,
    ButtonBrandComponent
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  dropdownOptions: IDropdownOptionInterface[] = [
    {
      name: 'Set an Action',
      value: 0
    },
    {
      name: 'Create New Ability',
      value: 1
    },
    {
      name: 'Create New Version',
      value: 2
    },
    {
      name: 'Export to Excel Sheet',
      value: 3
    }
  ]

  courses: ICourseItem[] = MOCKED_COURSES;
}
