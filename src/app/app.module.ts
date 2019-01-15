import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';


import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DateCountPipe } from './date-count.pipe';
import { VotesComponent } from './votes/votes.component';
import { UpvoteButtonComponent } from './upvote-button/upvote-button.component';
import { DownvoteButtonComponent } from './downvote-button/downvote-button.component';
import { HighlighterComponent } from './highlighter/highlighter.component';



@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,

    QuoteDetailsComponenent,
    QuoteFormComponent,
    DateCountPipe,
    VotesComponent,
    UpvoteButtonComponent,
    DownvoteButtonComponent,
    HighlighterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
