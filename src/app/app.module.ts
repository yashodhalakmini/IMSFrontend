import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin/admin.component';
import {UserComponent} from './user/user/user.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRouteModules } from './app.route.modules';
// import {AdminUsermanageComponent} from './admin/admin/adminusermanage.component';
// import {AdminInventorymanageComponent} from './admin/admin/admininventorymanage.component';
// import {AdminhallmanageComponent} from './admin/admin/adminhallmanage.component';
// import {AdminDamageItemsComponent} from './admin/admin/admininventorymanage/damageitems/damageitems.component';
// import {AdminRepairItemsComponent} from './admin/admin/admininventorymanage/repairitems/repairitems.component';
// import {AdminViewItemsComponent} from './admin/admin/admininventorymanage/viewitems/viewitems.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginpageComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouteModules,
    MDBBootstrapModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
