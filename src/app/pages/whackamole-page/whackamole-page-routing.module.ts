import { WhackamolePageComponent } from './../../pages/whackamole-page/whackamole-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: WhackamolePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhackamolePageRoutingModule { }
