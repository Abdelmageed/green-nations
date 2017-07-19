import { Component, OnInit } from '@angular/core';
import { UserApi } from "../user-api";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'fw-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formError: string;
  submitting = false;

  constructor(
    private userApi: UserApi,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(signinForm: NgForm) {

    if (!signinForm.valid) { return; }

    console.log('submitting...',  signinForm);

    this.submitting = true;
    this.formError = null;

    this.userApi.signIn(signinForm.value.username, signinForm.value.password, signinForm.value.rememberMe)
      .subscribe(data => {
        console.log('signin valid', data);
        this.router.navigate(['/authenticated']);
      }, error => {
        this.submitting = false;
        console.log('signin invalid', error);
        this.formError = error;
      });
  }

}
