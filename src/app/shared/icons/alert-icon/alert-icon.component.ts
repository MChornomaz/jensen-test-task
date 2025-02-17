import { Component } from '@angular/core';
import {BaseIconDirective} from '../../dictives/base-icon.directive';

@Component({
  selector: 'app-alert-icon',
  standalone: true,
  imports: [],
  templateUrl: './alert-icon.component.html',
})
export class AlertIconComponent extends BaseIconDirective  {}
