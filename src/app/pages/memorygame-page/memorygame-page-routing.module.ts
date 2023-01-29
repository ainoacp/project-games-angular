import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemorygamePageComponent } from './memorygame-page.component';

const routes: Routes = [
  {path: '', component: MemorygamePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemorygamePageRoutingModule { }
