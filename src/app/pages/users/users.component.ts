import { Component } from '@angular/core';
import {HeadingComponent} from "../../shared/heading/heading.component";
import {SearchComponent} from '../../shared/ui/inputs/search/search.component';
import {DropdownComponent} from '../../shared/ui/dropdown/dropdown.component';
import {IDropdownOption} from '../../shared/ui/dropdown/dropdown-option.interface';
import {ButtonBrandComponent} from '../../shared/ui/buttons/button-brand/button-brand.component';
import {IUser} from './user/user.interface';
import {USER_MOCK_DATA} from './mock-data/user-mock-data';
import {UserComponent} from './user/user.component';
import {CheckboxGroupComponent, CheckboxOption} from '../../shared/ui/checkbox-group/checkbox-group.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {TrashIconComponent} from '../../shared/icons/trash-icon/trash-icon.component';
import {CheckIconComponent} from '../../shared/icons/check-icon/check-icon.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    HeadingComponent,
    SearchComponent,
    DropdownComponent,
    ButtonBrandComponent,
    UserComponent,
    CheckboxGroupComponent,
    UserMenuComponent,
    TrashIconComponent,
    CheckIconComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  dropdownOptions: IDropdownOption[] = [
    {
      name: 'Show 5 users by page',
      value: 5
    },
    {
      name: 'Show 10 users by page',
      value: 10
    },
    {
      name: 'Show 15 users by page',
      value: 15
    }
  ];

  users: IUser[] = USER_MOCK_DATA;

  roleOptions: CheckboxOption[] = [
    {
      label: 'Student',
      value: 'student'
    },
    {
      label: 'Caretaker',
      value: 'caretaker'
    },
    {
      label: 'Teacher',
      value: 'teacher'
    },
    {
      label: 'Admin',
      value: 'admin'
    },
  ];

  levelOptions: CheckboxOption[] = [
    {
      label: 'Preschool',
      value: 'preschool'
    },
    {
      label: 'High School',
      value: 'high_school'
    },
    {
      label: 'Gymnasium',
      value: 'gymnasium'
    }
  ];

  directionOptions: CheckboxOption[] = [
    {
      label: 'Language',
      value: 'language'
    },
    {
      label: 'Math',
      value: 'math'
    },
    {
      label: 'Science',
      value: 'science'
    }
  ];
}
