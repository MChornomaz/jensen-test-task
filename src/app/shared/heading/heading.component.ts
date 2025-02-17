import {Component, computed, signal} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';
import {UpperCasePipe} from '@angular/common';
import {CapitalizeFirstPipe} from '../pipes/capitalize-first.pipe';

@Component({
  selector: 'app-heading',
  imports: [
    RouterLink,
    UpperCasePipe,
    CapitalizeFirstPipe
  ],
  standalone: true,
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
  currentRoute = signal<string[]>([]);

  constructor(private route: ActivatedRoute, private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateRoute();
      });

    this.updateRoute();
  }

  private updateRoute() {
    const path = this.router.url.split('/').filter(segment => segment);
    this.currentRoute.set(path);
  }

  get currentPath() {
    return computed(() => {
      return this.currentRoute().join(' / ');
    });
  }

  get grayPath() {
    return computed(() => {
      const segments = this.currentRoute();
      return segments.slice(0, segments.length - 1).join(' / ');
    });
  }

  get lastSegment() {
    return computed(() => {
      const segments = this.currentRoute();
      return segments[segments.length - 1];
    });
  }
}
