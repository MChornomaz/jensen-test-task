import {Component, input, output, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

export interface CheckboxOption {
  label: string;
  value: string;
}
@Component({
  selector: 'app-checkbox-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-group.component.html',
  styleUrl: './checkbox-group.component.scss'
})
export class CheckboxGroupComponent {
  options = input<CheckboxOption[]>([]);
  selectedValues = output<string[]>();

  selected = signal<string[]>([]);

  toggleSelection(value: string) {
    const updatedSelection = this.selected().includes(value)
      ? this.selected().filter(v => v !== value)
      : [...this.selected(), value];

    this.selected.set(updatedSelection);
    this.selectedValues.emit(updatedSelection);
  }
}
