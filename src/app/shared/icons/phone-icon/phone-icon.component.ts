import { Component } from '@angular/core';
import {BaseIconDirective} from '../../dictives/base-icon.directive';

@Component({
  selector: 'app-phone-icon',
  standalone: true,
  imports: [],
  templateUrl: './phone-icon.component.html',
})
export class PhoneIconComponent extends BaseIconDirective  {}
