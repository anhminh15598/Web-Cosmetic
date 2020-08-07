import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('signinForm') signinForm: HTMLFormElement;
  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {}

  canDeactive() {
    // Kiểm tra cái form có đang được nhập giữa chừng hay không
    // nếu form dirty => đã được thay đổi
    return this.signinForm.dirty;
  }

  dangKy(values) {
    console.log(values);
    this.auth.dangKy(values).subscribe((result) => {
      console.log(result);
    });
  }
}
