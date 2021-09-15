import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  hide = true; 
  title = 'akademedya';
  constructor(
    public toastr: ToastrService, 
    private spinner: NgxSpinnerService) {}
  

  ngOnInit() {
    //this.showSuccess();
    this.showSpinner();
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  showSpinner(){

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 400);
  }
  
  
}
