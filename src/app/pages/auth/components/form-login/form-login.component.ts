import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;
  public adminEmail = 'admin@gmail.com';
  public adminPWD = 'admin';

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.adminEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.adminPWD, [Validators.required])
    });
  }

  public connecter(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit();
    }
  }

}
