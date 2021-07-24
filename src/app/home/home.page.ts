import { Component, ViewChild } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { NgForm,FormControl,Validators, FormControlName, FormGroup, MinValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { variable05 } from './variable';

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
  baseURI = 'https://cloudide.appson.in/workspace/karunya/registration.php';


  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private http: HttpClient,
  ) {
    this.data = {
      name: '',
      email: '',
      phone: '',
      profession: '',
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
    console.log('onSubmit');
    console.log(f);
  this.isSubmitted = true;
  this.finaldata.phone = f.value.phone;
  this.finaldata.profession = f.value.profession;
  this.finaldata.city = f.value.city;
  this.finaldata.email = f.value.email;
  this.presentConfirm();
  }
  sending(){
    const file=JSON.stringify(
      {
      name: this.data.Name,
      email: this.data.emailid,
      phone: this.data.phonee,
      city: this.data.cityy,
      profession: this.data.professionn
     }
    );
    console.log('hiiiiiiiii');
    console.log(file);
    alert(file);
    this.http.post(this.baseURI,file)
    .subscribe(data1 => {
     console.log(data1);
     //alert('working');
     //this.connect.success(this.data);
    },
    err => {
    console.log('ERROR!: ', err);
    //alert('NOt Working');
    //this.connect.notworking(err);
    //this.hideForm   = true;
    //this.sendNotification(`Congratulations the technology: ${name} was successfully added`);
  });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  noSubmit(e: any) {
    e.preventDefault();
  }
  async presentConfirm() {
      const alert =this.alertCtrl.create({
      header:  'regsitration status',
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
    this.sending();
  }
  //settingform()
    //{
     // if(this.form.valid){
       // console.log('form submitted');
        //this.form.reset();
      //}
      //this.go();

  //}
    go()
      {
    this.router.navigateByUrl('/eventinfo');
    if(this.form.valid){
      console.log('form submitted');
     this.form.reset();
     }
    }
  }
