import { Routes } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { CitasComponent } from "./pages/citas/citas.component";
import { AcercadeComponent } from "./pages/acercade/acercade.component";
import { ContactanosComponent } from "./pages/contactanos/contactanos.component";
import {LandingFooterComponent} from "./landing/landing-footer/landing-footer.component";
import {LandingBodyComponent} from "./landing/landing-body/landing-body.component";
import {PagesComponent} from "./pages/pages.component";
import {LoginComponent} from "./login/login.component";
import {SetingsComponent} from "./setings/setings.component";

export const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    children:[
      {
        path: '',
        component: LandingBodyComponent,
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'configuracion',
    component: SetingsComponent,
  },
  {
    path: 'inicio',
    component: PagesComponent,
    children:[
      {
        path: 'citas',
        component: CitasComponent,
      },
      {
        path: 'nosotros',
        component: AcercadeComponent,
      },
      {
        path: 'contactanos',
        component: ContactanosComponent,
      }
    ]
  },

  {
    path:'',
    redirectTo:'landing',
    pathMatch: 'full'
  }

];


