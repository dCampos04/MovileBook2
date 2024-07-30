import { Component } from '@angular/core';
import {LandingFooterComponent} from "../landing/landing-footer/landing-footer.component";
import {LandingNavbarComponent} from "../landing/landing-navbar/landing-navbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-pages',
  standalone: true,
    imports: [
        LandingFooterComponent,
        LandingNavbarComponent,
        RouterOutlet
    ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}
