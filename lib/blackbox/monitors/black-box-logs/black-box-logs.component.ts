import { Component, OnInit } from '@angular/core';
import { BlackBoxService, Log } from '../../black-box.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-black-box-logs',
  templateUrl: 'black-box-logs.component.html',
  styleUrls: ['black-box-logs.component.scss']
})

export class BlackBoxLogsComponent implements OnInit {

  logs: Observable<Log[]>;

  constructor(private blackBoxService: BlackBoxService) {
    this.logs = blackBoxService.logs;
  }

  ngOnInit() {

  }
}
