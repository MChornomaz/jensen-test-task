import { Component } from '@angular/core';
import {BaseIconDirective} from '../../dictives/base-icon.directive';

@Component({
  selector: 'app-school-icon',
  standalone: true,
  imports: [],
  templateUrl: './school-icon.component.html',
})
export class SchoolIconComponent extends BaseIconDirective  {}
