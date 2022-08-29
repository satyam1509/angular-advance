import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/components/admin/header/header.component';
import { BotAddEditComponent } from './components/bot/bot-add-edit/bot-add-edit.component';
import { BotListComponent } from './components/bot/bot-list/bot-list.component';
import { FaqAddEditComponent } from './components/faq/faq-add-edit/faq-add-edit.component';
import { FaqListComponent } from './components/faq/faq-list/faq-list.component';


@NgModule({
  declarations: [
    BotListComponent,
    BotAddEditComponent,
    FaqListComponent,
    FaqAddEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    
  ]
})
export class AdminModule { }
