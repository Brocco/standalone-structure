import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>lazy works!</p>
    <pre>{{ data$ | async | json }}</pre>
  `,
  styles: [],
})
export class LazyComponent {
  data$ = this.dataService.getData();
  constructor(private dataService: DataService) {}
}
