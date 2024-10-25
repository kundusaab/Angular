import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NavbarComponent } from "../../component/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
