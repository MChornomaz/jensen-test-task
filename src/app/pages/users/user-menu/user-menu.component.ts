import { Component } from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {

}
