import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {LandingNavbarComponent} from "./landing-navbar/landing-navbar.component";
import {RouterLink} from "@angular/router";
import {LandingFooterComponent} from "./landing-footer/landing-footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingNavbarComponent,
    LandingFooterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
