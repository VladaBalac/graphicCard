import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ServiceService } from '../servis/service.service';

import { Comment } from '../model/comment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	// forma : FormGroup;
	comentar : Comment;
	@Output() javiComentar = new EventEmitter()

  constructor(private fb: FormBuilder, private servis : ServiceService, private r : ActivatedRoute) {
  	// this.napraviFormu();

  }

  // napraviFormu(){
  // 	this.forma = this.fb.group({
  // 		'author': '',
  // 		'text': ''
  // 	})
  // }

  ngOnInit() {
  	this.comentar = new Comment();
  }

  prosledi(){
  	// let com : Comment = new Comment (this.forma.value);
  	// this.comentar.author = com.author;
  	// this.comentar.text = com.text;
  	this.comentar.cards = parseInt(this.r.snapshot.paramMap.get('id'));
  	this.comentar.date = (new Date).toISOString();
  	this.servis.addComment(this.comentar).subscribe(res => {
  		this.comentar = new Comment();
  		this.javiComentar.emit(res);

  	})

  }

}
