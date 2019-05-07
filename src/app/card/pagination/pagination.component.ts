import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Card } from '../model/card';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

	@Input() totalCards :number;
	@Input() pageSize :number;
	@Input() curentPage :number;
	@Output() javi = new EventEmitter();
	lastPage :number;

  constructor() { }

  ngOnInit() {
  	this.lastPage = Math.ceil(this.totalCards / this.pageSize);
  }

   ngOnChanges() {
    this.lastPage = Math.ceil(this.totalCards / this.pageSize);
  }

  updatePage(page){
  	this.curentPage = page;
  	this.javi.emit({"page": page});
  }

}
