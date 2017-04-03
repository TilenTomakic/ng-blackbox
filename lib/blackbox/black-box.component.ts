import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Monitor } from './monitors/monitor.interface';

@Component({
  selector: 'app-black-box',
  templateUrl: 'black-box.component.html',
  styleUrls: ['black-box.component.scss']
})
export class BlackBoxComponent implements OnInit {

  monitors: Monitor[] = [];

  @Input() autoHide: boolean;
  @Input() showHandle: boolean;
  @Input() visible: boolean;
  position: number = 0;
  positions = ['right', 'bottom', 'left', 'top'];

  handlePosition: number = 0;
  handlePositions = [
    'top',
    'top-right',
    'right',
    'bottom-right',
    'bottom',
    'bottom-left',
    'left',
    'top-left',
  ];

  constructor() {}

  ngOnInit() {

  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.ctrlKey) {
      switch(event.keyCode) {
        case 72:
          event.preventDefault();
          this.visible = !this.visible;
          break;
        case 77:
          event.preventDefault();
          this.position++;
          if(this.position >= this.positions.length) {
            this.position = 0;
          }
          break;
        case 90:
          event.preventDefault();
          this.handlePosition++;
          if(this.handlePosition >= this.handlePositions.length) {
            this.handlePosition = 0;
          }
          break;
      }
    }
  }

  addMonitor(monitor: Monitor) {
    if (!this.monitors.length) {
      monitor.selected = true;
    }
    this.monitors.push(monitor);
  }

  selectMonitor(monitor: Monitor) {
    this.monitors.map((m) => {
      m.selected = false;
    });
    monitor.selected = true;
  }
}
