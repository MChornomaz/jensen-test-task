import {Component, computed, input, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {IDropdownOptionInterface} from './dropdown-option.interface';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  options = input<IDropdownOptionInterface[]>([]);
  selectedItem = signal<IDropdownOptionInterface | null>(null);

  currentSelection = computed(() => this.selectedItem());

  selectItem(item: IDropdownOptionInterface): void {
    this.selectedItem.set(item);
  }

  isDropdownVisible = signal(false);

  toggleDropdown() {
    this.isDropdownVisible.set(!this.isDropdownVisible());
  }
}
