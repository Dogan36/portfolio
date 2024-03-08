import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';


export const routes: Routes = [
{ path: '', component: MainContentComponent },
{ path: 'data', component: DataProtectionComponent },

];
