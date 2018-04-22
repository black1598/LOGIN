import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessages: FlashMessagesService
    
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registeruser(this.email, this.password)
    .then((res) =>{
      this.flashMessages.show('USUARIO CREADO CORRECTAMENTE.', {cssClass: 'alert-success', timeout: 4000})
      this.router.navigate(['/privado']);
    }).catch( (err) => {
      this.flashMessages.show(err.messages, {cssClass: 'alert-danger', timeout: 4000})
      
    });
  }
}
