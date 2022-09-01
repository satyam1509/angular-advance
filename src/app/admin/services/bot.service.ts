import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import apis from 'src/app/shared/configs/apis';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private authService:AuthService,private httpclient:HttpClient) { }

  // postBots(body:any){
  //  return  this.httpclient.post(apis.admin.postBot,body).pipe(tap((response)=>{

  //   // localStorage.setItem("userinfo",JSON.stringify(response));
  //   // this.userinfo=response;
  // }))

  // }
getBots(){
  return this.httpclient.get(apis.admin.getBots,{
    headers:{
      "Authorization" : `Bearer ${this.authService.userinfo.access_token}`
    }
  });

}

}
