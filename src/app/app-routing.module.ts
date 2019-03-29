import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'popover', loadChildren: './page/popover/popover.module#PopoverPageModule' },
  { path: 'modal', loadChildren: './page/modal/modal.module#ModalPageModule' },
  { path: 'marker', loadChildren: './page/marker/marker.module#MarkerPageModule' },
  { path: 'recenter', loadChildren: './page/recenter/recenter.module#RecenterPageModule' },
  { path: 'waypoint', loadChildren: './page/waypoint/waypoint.module#WaypointPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
