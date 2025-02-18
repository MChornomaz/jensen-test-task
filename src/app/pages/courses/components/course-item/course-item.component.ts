import {Component, input} from '@angular/core';
import {ICourseItem} from './course-item.interface';
import {DropdownComponent} from '../../../../shared/ui/dropdown/dropdown.component';
import {IDropdownOption} from '../../../../shared/ui/dropdown/dropdown-option.interface';
import {AlertIconComponent} from '../../../../shared/icons/alert-icon/alert-icon.component';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [
    DropdownComponent,
    AlertIconComponent
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.scss'
})
export class CourseItemComponent {
  courseItem = input<ICourseItem | null>(null);

  options: IDropdownOption[] = [
    {
      name: 'Option 1',
      value: 1
    },
    {
      name: 'Option 2',
      value: 2
    },
    {
      name: 'Option 3',
      value: 3
    }
  ]
}
