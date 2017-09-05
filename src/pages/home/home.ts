import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserLists } from '../../service/userList.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private userLists: UserLists) {

  }
  username: String;
  users: any;
  password: String;
  
  loginPage(){
    this.users= this.userLists.loginList();
    for(var i=0; i<this.users.length; i++){
      if(this.username=== this.users[i].username && this.password=== this.users[i].password){
        this.navCtrl.push(LoginPage);
      }
    }

  }

}
