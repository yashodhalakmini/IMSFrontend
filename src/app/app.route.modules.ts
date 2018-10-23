import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin/admin.component";
import { AdminhallmanageComponent } from "./admin/admin/adminhallmanage/adminhallmanage.component";
// import { AdmininventorymanageComponent } from "./admin/admin/admininventorymanage/admininventorymanage.component";
// import { AdminusermanageComponent } from "./admin/admin/adminusermanage/adminusermanage.component";
// import { UserinventorymanageComponent } from "./user/user/userinventorymanage/userinventorymanage.component";
// import { ViewitemsComponent } from "./admin/admin/admininventorymanage/viewitems/viewitems.component";


const routes: Routes = [

    { path: "", pathMatch: "full", redirectTo: "/login" },
    { path: "login", component: LoginpageComponent },
    //     {path:"",component:LoginpageComponent},
    { path: "admin", component: AdminComponent },
    //{ path: "adminhallmanage", component: AdminhallmanageComponent }
    //     {path:"admininventorymanage",component:AdmininventorymanageComponent},
    //     {path:"adminusermanage",component:AdminusermanageComponent},
    //     {path:"userinventorymanage",component:UserinventorymanageComponent},
    //     {path:"viewitems",component:ViewitemsComponent}
];

@NgModule({

    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModules { }