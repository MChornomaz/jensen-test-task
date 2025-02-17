import { Component } from '@angular/core';
import {BaseIconDirective} from '../../dictives/base-icon.directive';

@Component({
  selector: 'app-check-icon',
  standalone: true,
  imports: [],
  templateUrl: './check-icon.component.html',
})
export class CheckIconComponent extends BaseIconDirective  {}
