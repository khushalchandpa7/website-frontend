import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isPasswordVisible = signal(false);
  isRememberMeChecked = signal(false);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(10)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    rememberMe: new FormControl(false),
  })

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  get getEyeIconPath(): string {
    return this.isPasswordVisible() ? 'assets/icons/hide-pass-eye.svg' : 'assets/icons/show-pass-eye.svg';
  }

  onRememberMe() {
    this.isRememberMeChecked.set(!this.isRememberMeChecked());
    this.loginForm.get('rememberMe')?.setValue(this.isRememberMeChecked());
  }

  togglePasswordVisibility() {
    this.isPasswordVisible.set(!this.isPasswordVisible());
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      console.log(this.loginForm.value);
    } else {
      console.log(this.loginForm.value);
    }
  }
}
