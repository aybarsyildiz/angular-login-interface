import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const users = [
      { uid: 11, uname: 'aybars', surname:'yildiz', username: 'aybars12',password:'123456', email:'aybars@aybars.com'},
      { uid: 11, uname: 'srabya', surname:'yildiz', username: 'srabya12',password:'123456', email:'srabya@srabya.com' },
      { uid: 11, uname: 'burcu', surname:'ozbay', username: 'burcu19',password:'1234', email:'burcu@burcu.com'},
      { uid: 11, uname: 'benben', surname:'mesela', username: 'ucarimmesela',password:'yerlere', email:'goklere@sigamiyo.rum' },
     
    ];
    return {users};
  }

 constructor() { }
}
