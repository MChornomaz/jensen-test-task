import { Component } from '@angular/core';
import {BaseIconDirective} from '../../dictives/base-icon.directive';

@Component({
  selector: 'app-mail-icon',
  standalone: true,
  imports: [],
  templateUrl: './mail-icon.component.html',
})
export class MailIconComponent extends BaseIconDirective  {}
