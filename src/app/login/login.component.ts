import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm : FormGroup;
  errorMessage = "";

  hardcodedUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    // Check if the entered credentials match any of the hard-coded users
    const user = this.hardcodedUsers.find(u => u.username === username && u.password === password);

    if (user) {
      // Redirect to the account page if credentials are correct
      this.router.navigate(['/account']);
      this.errorMessage = 'Wellcome to our page '+ user.username;

    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

}
