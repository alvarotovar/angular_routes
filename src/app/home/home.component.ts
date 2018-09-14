import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text : string;

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.actualisaText();
  }

  actualisaText(){
    this.text = !this.authService.loggedIn ? 'Iniciar' : 'Cerrar';
  }

  changeLogStatus(){
    this.authService.loggedIn ? this.authService.logout() : this.authService.login();
  }
}
