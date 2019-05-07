import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './card/home/home.component';
import { CardListComponent } from './card/card-list/card-list.component';
import { CardComponent } from './card/card/card.component';
import { PaginationComponent } from './card/pagination/pagination.component';
import { GradeComponent } from './card/grade/grade.component';
import { CommentsComponent } from './card/comments/comments.component';
import { FormComponent } from './card/form/form.component';

import { ServiceService } from './card/servis/service.service';

import { AppRoutingModule} from './app-routing/app-routing.module';
import { CardRoutingModule } from './card/card-routing/card-routing.module';
import { ComFormComponent } from './card/com-form/com-form.component';
import { PageSizeComponent } from './card/page-size/page-size.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardListComponent,
    CardComponent,
    PaginationComponent,
    GradeComponent,
    CommentsComponent,
    FormComponent,
    ComFormComponent,
    PageSizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
