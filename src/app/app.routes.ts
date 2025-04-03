import { Routes } from '@angular/router';
import { MailComponent } from './component/mail-parent/mail-parent.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'mailparent',
        pathMatch:'full'
    },
    {
        path:'mailparent',
        component: MailComponent
    }
];
