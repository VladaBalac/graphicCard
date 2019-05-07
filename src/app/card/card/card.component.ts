import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../model/card';

import { ServiceService } from '../servis/service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input() private cards: Card;

  constructor(private servis :ServiceService) { }

  ngOnInit() {
  }

  vote(grade :number){
  	let tempCard = new Card(this.cards);
  	tempCard.grade = grade;
  	this.servis.changeGrade(tempCard).subscribe(res => this.cards = res);
  }

}
