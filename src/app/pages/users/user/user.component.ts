import {Component, input} from '@angular/core';
import {IUser} from './user.interface';
import {PhoneIconComponent} from '../../../shared/icons/phone-icon/phone-icon.component';
import {MailIconComponent} from '../../../shared/icons/mail-icon/mail-icon.component';
import {SchoolIconComponent} from '../../../shared/icons/school-icon/school-icon.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    PhoneIconComponent,
    MailIconComponent,
    SchoolIconComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = input.required<IUser>();
}
