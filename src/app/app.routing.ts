import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';



const routes: Routes = [
    {path: '', redirectTo: 'first', pathMatch: 'full'},
  {path : 'first', component: FirstComponent},
  {path: 'extra', loadChildren: 'extramodule/extra.module#ExtraModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);