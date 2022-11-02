import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MatchOnStateGuard } from './guards/objectifState.guard'
import { HomeComponent } from './home/home.component'
import { ObjectifsComponent } from './objectifs/objectifs.component'
import { State1Component } from './state1/state1.component'
import { State2Component } from './state2/state2.component'
import { State3Component } from './state3/state3.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'objectifs',
    component: ObjectifsComponent,
    canMatch: [MatchOnStateGuard('objectifs')],
    data: {
      reuseRoute: false
    }
  },
  {
    path: 'objectifs',
    component: State1Component,
    canMatch: [MatchOnStateGuard('first')],
    data: {
      reuseRoute: false
    }
  },
  {
    path: 'objectifs',
    component: State2Component,
    canMatch: [MatchOnStateGuard('second')],
    data: {
      reuseRoute: false
    }
  },
  {
    path: 'objectifs',
    component: State3Component,
    canMatch: [MatchOnStateGuard('third')],
    data: {
      reuseRoute: false
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
