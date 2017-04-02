import { Component, OnInit } from '@angular/core';
import { BlackBoxService, ObservableData } from '../../black-box.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-black-box-observables',
  templateUrl: 'black-box-observables.component.html',
  styleUrls: ['black-box-observables.component.scss']
})

export class BlackBoxObservablesComponent implements OnInit {

  observables: Observable<ObservableData[]>;

  constructor(private blackBoxService: BlackBoxService) {
    this.observables = blackBoxService.observables;
  }

  ngOnInit() {

  }
}
