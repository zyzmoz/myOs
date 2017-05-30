import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';



const appRoutes: Routes = [
    
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'customers',
        component: CustomersComponent
    },



    //last one
    {
        path: '**',
        component: HomeComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
