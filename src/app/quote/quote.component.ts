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
    new Quote(1, 'Nara grace', 'people who feel the need to control others do not have control over themselves', new Date(2018,1,10)),
    new Quote(2, 'shiny  people','if the road that you are on is perfectly clear,then you are probably on someone elses road',new Date(2019,0,1) )
  ]
  constructor(){}
  ngOnInit() {
  }

}
