import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  {path: 'memorygame', loadChildren: () => import('./pages/memorygame-page/memorygame-page.module').then(m => m.MemorygamePageModule)},  
  {path: 'treasurehunt', loadChildren: () => import('./pages/treasurehunt-page/treasurehunt-page.module').then(m => m.TreasurehuntPageModule)},
  {path: 'whackamole', loadChildren: () => import('./pages/whackamole-page/whackamole-page.module').then(m => m.WhackamolePageModule)},  
  {path: 'whoiswho', loadChildren: () => import('./pages/whoiswho-page/whoiswho-page.module').then(m => m.WhoiswhoPageModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
