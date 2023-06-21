import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'new-test', loadChildren: () => import('./new-test/new-test.module').then(m => m.NewTestModule) },
  { path: 'leaderboard', loadChildren: () => import('./leaderboard/leaderboard.module').then(m => m.LeaderboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
