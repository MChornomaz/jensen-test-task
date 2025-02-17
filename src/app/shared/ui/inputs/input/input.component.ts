import {Component, input} from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  type = input('text');
  placeholder = input('');
  inputId = input<string | null>();
  label = input<string | null>(null);
}
