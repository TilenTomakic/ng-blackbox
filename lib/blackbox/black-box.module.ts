import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackBoxService } from './black-box.service';
import { BlackBoxTreeComponent } from './black-box-tree';

import { BlackBoxComponent } from './black-box.component';
import { BlackBoxMonitorComponent } from './monitors/monitor.component';
import { BlackBoxLogsComponent } from './monitors/black-box-logs/black-box-logs.component';
import { BlackBoxObservablesComponent } from './monitors/black-box-observables/black-box-observables.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    BlackBoxService
  ],
  declarations: [
    BlackBoxComponent,
    BlackBoxMonitorComponent,
    BlackBoxLogsComponent,
    BlackBoxObservablesComponent,
    BlackBoxTreeComponent
  ],
  exports: [
    BlackBoxComponent,
    BlackBoxMonitorComponent,
    BlackBoxLogsComponent,
    BlackBoxObservablesComponent
  ]
})
export class BlackBoxModule { }
