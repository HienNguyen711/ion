import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams } from 'ionic-angular';


import {TabsPage} from '../tabs/tabs';
import { Auth } from '../../providers/auth';
import { AuthServiceProvider } from '../../providers/authService';



/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  role: string;
  email: string;
  password: string;
  firstname:string;
  lastname:string;

loading:any;
  private _authServiceProvider: AuthServiceProvider;




  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: Auth, public loadingCtrl: LoadingController) {
    this.loading = loadingCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
 
    this.showLoader();
 
    let credentials = {
        email: this.email,
        password: this.password,
        // role: this.role,
        firstname:this.firstname,
        lastname:this.lastname
    };
 
    // this.authService.createAccount(details).then((result) => {
    //   this.loading.dismiss();
    //   console.log(result);
    //   this.navCtrl.setRoot(TabsPage);
    // }, (err) => {
    //     this.loading.dismiss();
    // });

    this._authServiceProvider
    .register(credentials)
    .subscribe((user) => {
      console.log('the registered user is / the current user is '+user);
    })
 
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }





}
