import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Log {
  label: string;
  data: any;
}

export enum LogType {
  Debug,
  Detail,
  Error,
  Info,
  None,
  Warning
}

export interface ObservableData  {
  label: string;
  value?: any;
}

@Injectable()
export class BlackBoxService {
  private _logs: BehaviorSubject<Log[]> = new BehaviorSubject([]);
  public logs: Observable<Log[]> = this._logs.asObservable();

  private _observables: BehaviorSubject<ObservableData[]> = new BehaviorSubject([]);
  public observables: Observable<ObservableData[]> = this._observables.asObservable();

  private store: {
    logs: Log[];
    observables: ObservableData[]
  };

  constructor() {
    this.store = {
      logs: [],
      observables: []
    };
  }

  private _maxLogAge = -1;
  get maxLogAge (): number { return this._maxLogAge; }
  set maxLogAgeLogs (val: number) {
    this.removeOldLogs();
  }


  private _maxLogs = -1;
  get maxLogs (): number { return this._maxLogs; }
  set maxLogs (val: number) {
    this.removeOldLogs();
  }

  /**
   * Clear old logs.
   */
  public removeOldLogs() {
    // TODO
  }

  /**
   * Log into log monitor.
   * @param label
   * @param data
   */
  public log(label: string, data?: any){
    this.store.logs.unshift({label: label, data: data});
    this.removeOldLogs();
    this._logs.next(this.store.logs);
  }

  /**
   * Set last emitted value for observable.
   * @param i       Index under witch observable is stored in store.
   * @param value   Value to set as last emitted value.
   */
  private setObservableValue(i: number, value: any) {
    this.store.observables[i].value = value;
    this._observables.next(this.store.observables);
  }

  /**
   * Subscribe observable to blackbox service.
   * @param label       Name that will be used to represent data emitted by this observable.
   * @param observable
   */
  public observe(label: string, observable: any) { // Observable<any> | BehaviorSubject<any>
    const oi = this.store.observables.length;
    this.store.observables[oi] = { label: label };
    observable.subscribe(x => {
      this.setObservableValue(oi, x);

      this.log(`"${label}" CHANGE`, x);
    });
  }

}
