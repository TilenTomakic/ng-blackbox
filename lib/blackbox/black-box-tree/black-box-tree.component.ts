import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-black-box-tree',
  templateUrl: 'black-box-tree.component.html',
  styleUrls: ['black-box-tree.component.scss']
})
export class BlackBoxTreeComponent implements OnInit, OnChanges {

  @Input() label?    : string = "[click to expand]";
  @Input() data      : any;
  collapsed          : boolean = true;
  isArray            : boolean;
  children?          : any[];
  type               : string;

  constructor() {

  }

  ngOnInit() {
    this.processData();
  }


  ngOnChanges(changes) {
    this.processData();
  }

  processData() {
    this.type = typeof this.data;
    if(this.data === null) {
      this.type = "null";
    }
    switch (this.type) {
      case "object":
        this.children = Object.keys(this.data).map(key => {
          return { label: key, data: this.data[key] };
        });
        this.isArray = this.data instanceof Array;
        break;
      case "null":
      case "function":
      case "undefined":
        this.data = this.type;
        break;
      case "string":
        this.data = `"${this.data}"`;
        break;
    }
  }

  printToConsole() {
    console.log(this.data);
  }

  toggleCollapsed(event) {
    event.stopPropagation();
    this.collapsed = !this.collapsed;
  }

  expand() {
    this.collapsed = false;
  }

}
