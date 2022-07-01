import {Component} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  $export = new Subject();
  $$export = this.$export.asObservable();

  constructor() {
  }

  onExport(): void {
    this.$export.next();
  }
}
