import { Routes } from '@angular/router';
import { ExampleComponent } from './example.component';

export const routes: Routes = [
  { path: '', redirectTo: '/example', pathMatch: 'full' },
  { path: 'example', component: ExampleComponent },
];
