import { Routes, RouterModule, ActivatedRoute} from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateUpdateUserComponent } from './pages/user/createupdateuser/create-update.user.component';
/* import { UpdateUserComponent } from './pages/user/updateuser/update.user.component';
 */
import { SearchUserComponent } from './pages/user/searchuser/search.user.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', component: SearchUserComponent, canActivate: [AuthGuard] },
    { path: 'users/create', component: CreateUpdateUserComponent, canActivate: [AuthGuard]},
    { path: 'users/edit/:id', component: CreateUpdateUserComponent , canActivate: [AuthGuard]},
    {
      path: 'reloaduser',
      redirectTo: '/users',
      pathMatch: 'full'
    },
     // otherwise redirect to home
     //  { path: '**', redirectTo: '' },
     { path : '', redirectTo: '/login', pathMatch : 'full'}
];

export const Routing = RouterModule.forRoot(appRoutes, {
  onSameUrlNavigation: 'reload'
});
