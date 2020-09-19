import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './components/2019/main-screen/main-screen.component';
import { ResultsComponent } from './components/2019/results/results.component';
import { ScoutMatchComponent } from './components/2019/scout-match/scout-match.component';
import { TeamScheduleComponent } from './components/2019/team-schedule/team-schedule.component';


const routes: Routes = [
  {
    path: "home",
    component: MainScreenComponent,
    children: [
      {
        path: "scout-match",
        component: ScoutMatchComponent,
      },
      {
        path: "view-schedule",
        component: TeamScheduleComponent,
      },
      {
        path: "view-results",
        component: ResultsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
