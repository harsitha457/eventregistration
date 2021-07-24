import { Component, ViewChild } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { NgForm,FormControl,Validators, FormControlName, FormGroup, MinValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('f') form: any;
  isSubmitted = false;
  finaldata: any;
  profession: any;
  gender: any;
  city: any;


  constructor(
    private alertCtrl: AlertController,
    private router: Router,
  ) {
    this.data = {
      name: '',
      email: '',
      phone: '',
      profession: '',
      gender: '',
      city: ''
    };
    this.finaldata=this.data;

    // this.data = new FormGroup({
    //name: new FormControl('',Validators.required),
    //email: new FormControl('',Validators.pattern('.+\@.+\..+')),
    //phone: new FormControl('',Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'))
  //});
  }
  onSubmit(f) {
  this.isSubmitted = true;
  if(this.form.valid){
    console.log('form submitted');
    this.form.reset();
  }
    console.log('onSubmit');
    console.log(f);
    this.presentConfirm();
    //this.finaldata.gender = f.value.gender;
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  noSubmit(e: any) {
    e.preventDefault();
  }
  go()
  {
    this.router.navigateByUrl('/eventinfo');
  }
 // registered(){
   // this.alertCtrl.create({
    //  header: 'GREAT!!',
     // message: 'you have Registered Successfully',
     // buttons: [
      //{
       /// text: 'Okay',
        //handler: () => {
         // this.router.navigate(['/home']);
        //}
      //}//]
     //}).then(alertEL => {
      // alertEL.present();
     //});
     //this.presentConfirm();
 // }
  async presentConfirm() {
      const alert =this.alertCtrl.create({
      header: 'Registeration status',
      message: 'You have successfully registered the event Thank you!! Have a great day',
      buttons: [
        {
          text: 'Done',
          handler: () => {
            console.log('ok Clicked');
          }
        }
      ]
    });
    (await alert).present();
  }
}

