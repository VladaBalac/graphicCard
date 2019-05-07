import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CardList } from '../model/card-list';
import { Card } from '../model/card';
import { CommentList } from '../model/comment-list';
import { Comment } from '../model/comment';

const url = 'http://localhost:3000/api/cards';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

	  constructor(private http: HttpClient) { }

	getAll(params? :any):Observable<CardList>{
	let queryParams = {};
  	if(params){
  		queryParams = {
  			params : new HttpParams()
  				.set("page", params.page && params.page.toString() || '1')
  				.set("pageSize", params.page && params.pageSize.toString() || '10')
  			}
  		}
		return this.http.get(url, queryParams).pipe(map(res => new CardList(res)));
	}

	getComment(id:number):Observable<CommentList>{
		return this.http.get(url + "/" + id + "/comments").pipe(map(res => new CommentList(res)));
	}

	addComment(com: Comment): Observable<Comment>{
		return this.http.post(url + "/" + com.cards + "/comments", com ).pipe(map(res => {
			return new Comment(res)}));
	}

	changeGrade(grade :Card): Observable<Card>{
		return this.http.put(url + "/" + grade._id, grade).pipe(map(res => {
			return new Card(res)}));
		}
	}


}
