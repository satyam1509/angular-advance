import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

     uiData = { 
    headerTitle: "FAQs",

    tableUIdata:[
      {
        'title':'#',
        'colName':'id'
      },
      {
        'title':'FAQ Title',
        'colName':'title'
      },
      {
        'title':'Content',
        'colName':'content'
      },
      {
        'title':'Date',
        'colName':'date'
      },
      {
        'title':'Actions',
        'colName':'actions'
      },
    ]

  }
  
  faqs:any[]=[{
    id:1,
    title:"title1",
    content:"content1",
    date:new Date("2022-08-25")
  },
  {
    id:2,
    title:"title2",
    content:"content2",
    date:new Date("2022-08-26")
  },
  {
    id:3,
    title:"title3",
    content:"content3",
    date:new Date("2022-08-27")
  },]
}
