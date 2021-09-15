import { Injectable } from '@angular/core';

interface user {

  uid: number;
  username: string;
  password: string;
  email: string;


}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    
      {
        uid: 0,
        name:"aybars",
        surname:"yildiz",
        username:"aybars12",
        password:"123456",
        email:"aybars@aybars.com"
    },
    {
        uid: 1,
        name:"srabya",
        surname:"zidliy",
        username:"srabya12",
        password:"1234",
        email:"aybarss@aybars.com"
    },
    {
        uid: 2,
        name:"burcu",
        surname:"özbay",
        username:"burcu19",
        password:"4321",
        email:"burcu@burcu.com"
    }
   
  ];
  constructor() { }

  getLoginInformations(){
    return this.users.map(elem=> ({
      uid: elem.uid,
      username: elem.username,
      password: elem.password
    }));
  }

  checkLogin(username:string, password:string){
    const index = this.users.findIndex(el=> el.username === username);
    if(index > -1 && password === this.users[index].password){
      console.log("Kullanıcı adı ve şifre doğru!")
      return true;
    }
    else{
      console.log("Kullanıcı adı veya şifre yanlış!");
      return false;
    }


  }

  save(uname:string,surname:string,username:string,password:string,email:string){
    const indexOfUser = this.users.findIndex(el=> el.username === username);
    const indexOfEmail = this.users.findIndex(elem=> elem.email === email);


    if(indexOfUser > -1 || indexOfEmail > -1){
      console.log("User already exist")
      return false;
    }else{
      this.users.push({uid: this.users.length, name:uname,surname:surname ,username:username, password: password, email:email})
      return true;
    }

  }


}
