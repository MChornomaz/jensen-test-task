import { Component } from '@angular/core';
import {BaseIconDirective} from '../../dictives/base-icon.directive';

@Component({
  selector: 'app-trash-icon',
  standalone: true,
  imports: [],
  templateUrl: './trash-icon.component.html',
})
export class TrashIconComponent extends BaseIconDirective  {}
