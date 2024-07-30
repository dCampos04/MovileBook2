import { Component } from '@angular/core';
import {SetingsNavbarComponent} from "./setings-navbar/setings-navbar.component";
import {SetingSidebarComponent} from "./seting-sidebar/seting-sidebar.component";

@Component({
  selector: 'app-setings',
  standalone: true,
  imports: [
    SetingsNavbarComponent,
    SetingSidebarComponent
  ],
  templateUrl: './setings.component.html',
  styleUrl: './setings.component.css'
})
export class SetingsComponent {

}
