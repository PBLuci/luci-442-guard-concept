import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
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
    component: ObjectifsComponent
  },
  {
    path: 'state-1',
    component: State1Component
  },
  {
    path: 'state-2',
    component: State2Component
  },
  {
    path: 'state-3',
    component: State3Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
