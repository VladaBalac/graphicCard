import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servis/service.service';

import { ActivatedRoute } from '@angular/router';

import { CommentList } from '../model/comment-list';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-com-form',
  templateUrl: './com-form.component.html',
  styleUrls: ['./com-form.component.css']
})
export class ComFormComponent implements OnInit {

	private comm :Comment[];
	private count :number;

  constructor(private servis :ServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe( params => {
  	this.servis.getComment(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(res => {
  		this.comm = res.results;
      this.count = res.count;
  	});
  	});
  }

  javiComentar(comentar){
    this.comm.push(comentar);
    this.count +=1;
  }


}
