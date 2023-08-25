import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: string | any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const loginData = {
      email: 'abc@gmail.com.au',
      upwd: '123'
    };

    this.login(loginData);
  }

  login(loginData: any) {
    this.http.post('/api/login', loginData).subscribe((response: any) => {
      if (response.valid) {
        this.user = response;
        sessionStorage.setItem('currentUser', JSON.stringify(this.user)); 
      } else {
        console.log('Invalid credentials');
      }
    });
  }
}
