import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/service/authentication.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  constructor(private auth: AuthenticationService) {
    this.signinForm = new FormGroup({
      tenTk: new FormControl('', [Validators.required]),
      matKhau: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    });
  }

  ngOnInit(): void {}

  dangNhap() {
    this.signinForm.markAllAsTouched();
    if (this.signinForm.invalid) return;
    // console.log(this.signinForm.value);
    this.auth.dangNhap(this.signinForm.value).subscribe({
      // next: (result) => console.log(result),
      next: (result) => console.log(),
    });
  }
}
