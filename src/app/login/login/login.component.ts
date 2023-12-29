import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      // Umieszczaj w tablicy jeśli masz wiele walidatorów, bo będzie je*** errorem z każdym inputem :D
      password: ['', Validators.required],
    })
  }

  login() {
    // Można po stronie backendu zrobić odpowiednie errory aby je można było zwracać w catchError(). Możesz zrobić subskrypcje i porobić ngOnDestroy na nich aby nie było wycieków pamięci. 
    this.authService.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
      if (response.jwtToken) {

        const jwtToken = response.jwtToken;
        localStorage.setItem('JWT', jwtToken);
        this.router.navigate(['books']);
      }
    })
  }
}
