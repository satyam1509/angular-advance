import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BotService } from 'src/app/admin/services/bot.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.scss']
})
export class BotListComponent implements OnInit {

  constructor(public authService: AuthService,private botservice:BotService,private router:Router) { }

  ngOnInit(): void {
    this.getBots();
  }

  uiData = { 
    headerTitle: "BOTs",

    tableUIdata:[
      {
        'title':'#',
        'colName':'botId'
      },
      {
        'title':'BOT Title',
        'colName':'name'
      },
      {
        'title':'Content',
        'colName':'createdBy'
      },
      {
        'title':'Date',
        'colName':'createdAt'
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
  },
  {
    id:4,
    title:"title4",
    content:"content4",
    date:new Date("2022-08-28"),
   
  },]

  //   postBots(){
  //     console.log("bot post from botlist component ");

  //   let body={
  //    id:"1",
  //    title:"this is title 1",
  //    content:"this is content 1",
  //    date:"30-08-2022"
  //   }
  //  let b =JSON.stringify(body);

  //   this.botservice.postBots(b).subscribe({
      
  //     next:(response)=>{
  //       console.log(response);
  //     },
  //     error:(error)=>{
  //       console.log(error);
  //     }

  //   });
  //   }

  
getBots(){
  this.botservice.getBots().subscribe({
    next:(response:any)=>{ this.bots = response },
    error:(error)=>{ 
      alert("Session Timeout");
      this.router.navigate(['/auth']  
      )}
  });

}

  }



