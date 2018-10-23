import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
// import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
// import { HallmanageComponent } from './admin/hallmanage/hallmanage.component';
import { AdmininventorymanageComponent } from './admin/admininventorymanage/admininventorymanage.component';
//import { DamageitemsComponent } from './admin/admininventorymanage/damageitems/damageitems.component';
//import { RepairitemsComponent } from './admin/admininventorymanage/repairitems/repairitems.component';
import { ViewitemsComponent } from './admin/admininventorymanage/viewitems/viewitems.component';
import { AdminusermanageComponent } from './admin/adminusermanage/adminusermanage.component';
import { AdminhallmanageComponent } from './admin/adminhallmanage/adminhallmanage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent,
    // ManageUsersComponent,
    // HallmanageComponent,
    // AdmininventorymanageComponent,
    // DamageitemsComponent,
    //  RepairitemsComponent, 
    //  ViewitemsComponent, 
    //  AdminusermanageComponent, 
    //  AdminhallmanageComponent
  ]
})
export class AdminModule { }
