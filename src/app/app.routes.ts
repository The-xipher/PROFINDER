import { Routes } from '@angular/router';
import { BecomeProComponent } from './pages/become-pro/become-pro.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './components/success/success.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AppEntryComponent } from './pages/app-entry/app-entry.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'BecomePro', component: BecomeProComponent },
  { path: 'services', component: ServicesComponent }, // Corrected path here
  { path: 'LogIn', component: LoginComponent }, // Corrected path here
  { path: 'Help', component: FaqComponent },
  { path: 'services/service-detail/:title', component: ServiceDetailComponent }, // Corrected path here
  { path: 'success', component: SuccessComponent}, // Corrected path here
  { path: 'cancel', component: CancelComponent}, 
  { path: 'dashboard',component:DashboardComponent}, //
  { path: 'signup',component:SignupComponent}, //
  { path: 'auth',component:AppEntryComponent}, //
  { path: 'cart',component:CartComponent}, //
  // other routes
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }