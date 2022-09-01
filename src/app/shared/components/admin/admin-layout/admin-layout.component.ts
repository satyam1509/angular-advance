import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()items:any[]=[];

  @Input() uiData = { 
    headerTitle: "a",

    tableUIdata:[
      {
        'title':'#',
        'colName':'id'
      },
      {
        'title':' Title',
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

}
