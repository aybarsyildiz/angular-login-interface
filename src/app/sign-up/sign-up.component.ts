import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/lib';
import { WhiteSpaceValidator } from 'src/lib/custom-validators/white-space-validator';
import { NgxSpinnerService } from "ngx-spinner"
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  hide = true; 
  title = 'akademedya';
  userData: any;
  constructor(public toastr: ToastrService,private userService: UserService, private spinner: NgxSpinnerService) { 
    this.signupForm = new FormGroup({
      uname: new FormControl(),
      surname: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl()


    })
  }

  ngOnInit(): void {
    this.resetForm();
    this.userData = this.userService.getLoginInformations();
  }

  showSucces(){
    this.toastr.success('Ana Sayfaya Yönlendiriliyorsunuz...','Kayıt işlemi başarılı!');
    this.showSpinner();
  }
  showError(){
    this.toastr.error('Girdiğiniz kullanıcı adı veya e-mail daha önce kullanılmış.','Kayıt işlemi başarısız!')
    this.resetForm();
  }

  registerUser(signupForm:FormGroup){
    console.log("name:"+signupForm.get('uname')?.value.toString()+" surname: "+signupForm.get('surname')?.value.toString());
    console.log("email:"+signupForm.get('email')?.value.toString());
    if(this.userService.save(signupForm.get('uname')?.value.toString(), signupForm.get('surname')?.value.toString(), signupForm.get('username')?.value.toString(), signupForm.get('password')?.value.toString(), signupForm.get('email')?.value.toString())){
      this.showSucces();      
    }
    else{
      this.showError();
    }
  }

  resetForm(){
    this.signupForm = new FormGroup({
      uname: new FormControl(""),
      surname: new FormControl(""),
      username: new FormControl("",{
        validators:[
          Validators.minLength(3),
          Validators.required,
          WhiteSpaceValidator
        ]
      
      }),
      password: new FormControl(""),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ])
    
    })
  }
  showSpinner(){

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 800);
  }
}
