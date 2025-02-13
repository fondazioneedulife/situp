import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
// import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
        // canActivate: [AuthGuard],
        title: 'Benvenuto',
    }

];
