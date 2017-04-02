import { Component, OnInit, Input } from '@angular/core';
import { Monitor } from './monitor.interface';
import { BlackBoxComponent } from '../black-box.component';

@Component({
  selector: 'app-black-box-monitor',
  template: `<div *ngIf="selected"><ng-content></ng-content></div>`
})

export class BlackBoxMonitorComponent implements OnInit, Monitor {

  @Input() title;
  selected: boolean = false;

  constructor(private blackBoxComponent: BlackBoxComponent) {

  }

  ngOnInit() {
    this.blackBoxComponent.addMonitor(this);
  }
}
