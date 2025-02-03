import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './componentes/parent-data/parent-data.component';
import { DirectivesComponent } from './componentes/directives/directives.component';
export const routes: Routes = [
 {path:'', component: FirstComponentComponent},
 {path:'ParentData', component: ParentDataComponent},
 {path:'DirectivesComponent', component: DirectivesComponent},
 
];
