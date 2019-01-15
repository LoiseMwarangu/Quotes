import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: string[];


  quotes=[
    new Quote(1, 'L Mwarangu', 'Fool me once,shame on you.fool me twice, that is weird i thought i murdered you', 'L Mwarangu' , new Date(2018,0,10)),
    new Quote(2, 'Nara grace', 'people who feel the need to control others do not have control over themselves', 'Anonymous' , new Date(2018,1,10)),
    new Quote(3, 'shiny  people','if the road that you are on is perfectly clear,then you are probably on someone elses road', 'Kristine K. Stevens',new Date(2019,0,1) )
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete "${this.quotes[index].description}"`)        
        if(toDelete){
            this.quotes.splice(index,1)
        }
    }
}

  constructor(){}
  ngOnInit() {
  }

}
