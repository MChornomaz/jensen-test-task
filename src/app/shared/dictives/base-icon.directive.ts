import {Directive, input} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appBaseIcon]'
})
export class BaseIconDirective {
  public color = input('#1E1E1E');
  public strokeWidth = input(2.5);
  public fill = input('#1E1E1E');
}
