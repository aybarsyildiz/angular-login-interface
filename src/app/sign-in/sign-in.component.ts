import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import users from "../all-users.json";
import { WhiteSpaceValidator } from 'src/lib/custom-validators/white-space-validator';
import { ToastrService } from 'ngx-toastr'
import { UserService } from 'src/lib';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup; 
  hide = true; 
  title = 'akademedya';
  userData: any; 
  constructor(public toastr: ToastrService,private userService: UserService) { 
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    }); 
  }

  ngOnInit(): void {
    this.resetForm();
    this.userData = this.userService.getLoginInformations();
  }
  showSuccess() {
    this.toastr.success('Ana Sayfaya Yönlendirliyorsunuz...', 'Giriş işlemi başarılı!');
  }
  showError(){
    this.toastr.error('Girdiğiniz kullanıcı adı veya şifre hatalı.','Bir hata ile karşılaşıldı!');
  }

  checkUser(loginForm:FormGroup){
    console.log("username: "+loginForm.get('username')?.value.toString()+" password:"+loginForm.get('password')?.value.toString());
    if(this.userService.checkLogin(loginForm.get('username')?.value.toString(),loginForm.get('password')?.value.toString())){
      this.showSuccess();
    }
    else{
      this.showError();
    }



  }
  resetForm(){
    this.loginForm = new FormGroup({
      username: new FormControl("",{validators:[
        Validators.minLength(3),
        Validators.required,
        WhiteSpaceValidator
      ]


      }),
      password: new FormControl("")
    })
  }


}

