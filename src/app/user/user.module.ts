import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserinventorymanageComponent } from './user/userinventorymanage/userinventorymanage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserinventorymanageComponent]
})
export class UserModule { }
