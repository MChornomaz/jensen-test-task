import {Component, input} from '@angular/core';
import {SearchIconComponent} from '../../../icons/search-icon/search-icon.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    SearchIconComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  placeholder = input('');
}
