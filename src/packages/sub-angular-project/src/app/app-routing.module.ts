import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/angular-home' },
  { path: 'angular-home', loadChildren: () => import('./pages/home/module').then(m => m.Module) },
  { path: 'mine', loadChildren: () => import('./pages/mine/module').then(m => m.Module) },
  { path: 'about', loadChildren: () => import('./pages/about/module').then(m => m.Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // @ts-ignore 
  providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/sub-angular-project' : '/' }]
})
export class AppRoutingModule { }
