import { Component, computed, signal } from '@angular/core';
import { createSignal } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  onClickToAdd() {
    // this.count.set(this.count() + 1);
    this.count.update((v) => (v += 1));
  }
  public items = [
    {
      name: 'zhansgan',
      age: 1,
    },
    {
      name: 'zhansgan2',
      age: 2,
    },
    {
      name: 'zhansgan3',
      age: 3,
    },
    {
      name: 'zhansgan4',
      age: 4,
    },
  ];
  v = createSignal('initialValue');
  count = signal(0);
  gtCount = computed(() => this.count() + 10);
  constructor() {}
}
