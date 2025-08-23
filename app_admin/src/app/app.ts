import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from './navbar/navbar'
import {routes} from './app.routes'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: '/app.html',
  styleUrls : ['./app.css'],

})
export class App {
  title = ('Travlr Getaway Admin!');
}





