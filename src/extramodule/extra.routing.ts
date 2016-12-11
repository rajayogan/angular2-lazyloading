import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraComponent } from './extra.component';

const routes: Routes = [
    {path: '', component: ExtraComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);