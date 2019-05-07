import { Component, OnInit } from '@angular/core';
import { CardList } from '../model/card-list';
import { Card } from '../model/card';

import { ServiceService } from '../servis/service.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

	private count: number;
	private card: Card[];
  size :number[] = [5, 10, 20];
  params = {
    "page":1,
    "pageSize":5
  }

  constructor(private servis :ServiceService) { }

  ngOnInit() {
  	this.refresh();
  }

  refresh(params?: any){
    if(params){
      this.params.page = params.page || this.params.page;
      this.params.pageSize = params.pageSize || this.params.pageSize;
    }
  	this.servis.getAll(this.params).subscribe(res => {
  		this.count = res.count;
  		this.card = res.results;
  		console.log(this.card);
  	})
  }

}
