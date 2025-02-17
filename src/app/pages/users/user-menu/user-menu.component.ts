import { Component } from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import {ArrowDownIconComponent} from '../../../shared/icons/arrow-down-icon/arrow-down-icon.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    UpperCasePipe,
    ArrowDownIconComponent
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {

}
