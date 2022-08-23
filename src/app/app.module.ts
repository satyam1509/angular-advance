import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { BotListComponent } from './admin/components/bot/bot-list/bot-list.component';
import { BotAddEditComponent } from './admin/components/bot/bot-add-edit/bot-add-edit.component';
import { FaqListComponent } from './admin/components/faq/faq-list/faq-list.component';
import { FaqAddEditComponent } from './admin/components/faq/faq-add-edit/faq-add-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BotListComponent,
    BotAddEditComponent,
    FaqListComponent,
    FaqAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }