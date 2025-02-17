import {Component, input} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  type = input('text');
  inputId = input<string | null>();
  label = input<string | null>(null);
}
