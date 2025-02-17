import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button-brand',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button-brand.component.html',
  styleUrl: './button-brand.component.scss'
})
export class ButtonBrandComponent {
  disabled = input(false);
  type = input<'button' | 'submit'>('button')
}
