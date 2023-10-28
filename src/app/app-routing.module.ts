import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArchiveComponent } from "./components/archive/archive.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: ":language?", component: HomeComponent },
  { path: ":language?/projectos", component: ArchiveComponent },

  // {path: 'profile'        ,   component: ProfileComponent         , canActivate: [AuthGuard]},
  // {path: 'users'          ,   component: UsersComponent           , canActivate: [AuthGuard]},
  // {path: 'register-user'  ,   component: RegisterUserComponent    , canActivate: [AuthGuard]},

  { path: "**", pathMatch: "full", redirectTo: "/" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
