import {Component, input} from '@angular/core';
import {ICourseItem} from './course-item.interface';
import {DropdownComponent} from '../../../../shared/ui/dropdown/dropdown.component';
import {IDropdownOptionInterface} from '../../../../shared/ui/dropdown/dropdown-option.interface';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [
    DropdownComponent
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.scss'
})
export class CourseItemComponent {
  courseItem = input<ICourseItem | null>(null);

  options: IDropdownOptionInterface[] = [
    {
      name: 'Set an Action',
      value: 0
    },
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

  getGradeRows() {
    const chunkSize = 4;
    const rows = [];
    if(this.courseItem() && this.courseItem()?.grades){
      for (let i = 0; i < this.courseItem()!.grades.length; i += chunkSize) {
        rows.push(this.courseItem()?.grades.slice(i, i + chunkSize));
      }
    }
    console.log(rows)
    return rows;
  }
}
