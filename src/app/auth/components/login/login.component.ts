

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router, private activatedroute: ActivatedRoute,private translate:TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  loginform = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  ngOnInit(): void {

  }

  login(){
    console.log("login from login component ");

    let body={
      username: this.loginform.value.email,
      password: this.loginform.value.password
    }

    this.authService.login(body).subscribe({
      next: (response) => {
        console.log('post request working !!', response);
       this.router.navigateByUrl("/admin");
       },
      error: (error) => {
        console.log('error occurs', error);
        alert("invalid username or password!!  Try Again");
      },
    });
  }
  
}
