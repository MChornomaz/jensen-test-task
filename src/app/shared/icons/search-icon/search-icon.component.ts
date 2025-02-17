import { Component } from '@angular/core';
import {BaseIconDirective} from '../../dictives/base-icon.directive';

@Component({
  selector: 'app-search-icon',
  standalone: true,
  imports: [],
  templateUrl: './search-icon.component.html',
})
export class SearchIconComponent extends BaseIconDirective  {}
