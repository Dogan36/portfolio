import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
{ path: '', component: MainContentComponent, data: { title: 'Dogan Celik | Home' } },
{ path: 'data', component: DataProtectionComponent, data: { title: 'Dogan Celik | Privacy' } },
{ path: 'imprint', component: ImprintComponent, data: { title: 'Dogan Celik | Imprint' } },
];
