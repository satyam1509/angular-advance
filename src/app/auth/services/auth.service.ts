import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient,private router:Router,private route: ActivatedRoute) { }


  login(body:any) {
    // console.log({username:this.username,
    //   password:this.password});
    console.log('login clicked!!!');
  
    this.http.post('https://ai-lab-backend.herokuapp.com/api/v1/auth/login', body)
      .subscribe({
        next: (response) => {
          console.log('post request working !!', response);
          localStorage.setItem('userinfo', JSON.stringify(response));
          
        },
        error: (error) => {
          console.log('error occurs', error);
          alert("invalid username or password!!  Try Again");
        },
      });
  }
}

