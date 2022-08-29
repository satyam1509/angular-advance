import { Component, ContentChild, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.scss']
})
export class BotListComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  uiData = { 
    headerTitle: "BOTs",

    tableUIdata:[
      {
        'title':'#',
        'colName':'id'
      },
      {
        'title':'BOT Title',
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
   bots:any[]=[{
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



