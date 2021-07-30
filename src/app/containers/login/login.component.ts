import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      nome:[''],
      senha:['']
    })
  }

}
