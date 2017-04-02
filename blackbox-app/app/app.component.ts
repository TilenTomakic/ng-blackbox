import { Component } from '@angular/core';
import { BlackBoxService } from '../../lib/blackbox/black-box.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'blackbox-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private data: Observable<any>;

  constructor(private blackBoxService: BlackBoxService) {
    this.blackBoxService.log("Log demo 1");
    this.blackBoxService.log("Log demo 2", { bar: [ 'foo' ] });

    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next({
          date: new Date().toISOString(),
          array: [1,2,3,4],
          demoIsOver: false
        });
      }, 100);

      setTimeout(() => {
        observer.next({
          note: "Note: you can click on lightning icon to print into console.",
          array: [1,2,3,4],
          demoIsOver: true
        });
      }, 1000);
    });

    this.blackBoxService.observe("APP DATA", this.data);
  }

}
