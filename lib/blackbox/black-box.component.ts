import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Monitor } from './monitors/monitor.interface';

@Component({
  selector: 'app-black-box',
  templateUrl: 'black-box.component.html',
  styleUrls: ['black-box.component.scss']
})
export class BlackBoxComponent implements OnInit {

  /**
   * List of monitor-wrappers in dock.
   * @type {Array}
   */
  monitors: Monitor[] = [];

  /**
   * If monitor should auto hide & display handle for showing on mouse over.
   * Note @visible variable can still hide handle & dock.
   * @type {boolean}
   */
  @Input() autoHide: boolean;

  /**
   * @ignore
   */
  @Input() showHandle: boolean;

  /**
   * If monitor should be visible or not.
   */
  @Input() visible: boolean;

  /**
   * Current index of position that dock has.
   * @type {number}
   */
  position: number = 0;

  /**
   * List of all possible positions. Used in scss.
   * @type {[string,string,string,string]}
   */
  positions = ['right', 'bottom', 'left', 'top'];

  /**
   * @ignore
   */
  handlePosition: number = 0;

  /**
   * @ignore
   */
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

  /**
   * Keycode for toggling dock visibility. Default Ctrl+H
   * @type {number}
   */
  @Input() visibilityKey = 72;

  /**
   * Keycode for moving dock. Default Ctrl+M
   * @type {number}
   */
  @Input() moveKey = 77;

  constructor() {}

  ngOnInit() { }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.ctrlKey) {
      switch(event.keyCode) {
        case this.visibilityKey:
          event.preventDefault();
          this.visible = !this.visible;
          break;
        case this.moveKey:
          event.preventDefault();
          this.position++;
          if(this.position >= this.positions.length) {
            this.position = 0;
          }
          break;
        case 90:
          // event.preventDefault();
          // this.handlePosition++;
          // if(this.handlePosition >= this.handlePositions.length) {
          //   this.handlePosition = 0;
          // }
          break;
      }
    }
  }

  /**
   * Register monitor wrapper. Used by BlackBoxMonitorComponent.
   * @param monitor
   */
  addMonitor(monitor: Monitor) {
    if (!this.monitors.length) {
      monitor.selected = true;
    }
    this.monitors.push(monitor);
  }

  /**
   * Select monitor tab.
   * @param monitor
   */
  selectMonitor(monitor: Monitor) {
    this.monitors.map((m) => {
      m.selected = false;
    });
    monitor.selected = true;
  }
}
