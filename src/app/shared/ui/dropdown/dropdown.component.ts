import {Component, computed, input, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {IDropdownOption} from './dropdown-option.interface';

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
  options = input<IDropdownOption[]>([]);
  selectedItem = signal<IDropdownOption | null>(null);
  isDropdownVisible = signal(false);
  currentSelection = computed(() => this.selectedItem());


  toggleDropdown() {
    this.isDropdownVisible.set(!this.isDropdownVisible());
  }

  selectItem(item: IDropdownOption): void {
    this.selectedItem.set(item);
    this.isDropdownVisible.set(false);
  }
}
