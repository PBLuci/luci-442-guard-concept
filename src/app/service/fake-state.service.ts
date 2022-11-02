import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { PossibleState } from '../interface/state'

@Injectable({
  providedIn: 'root'
})
export class FakeStateService {
  private currentState$ = new BehaviorSubject<PossibleState>('first')
  currentStateObs$ = this.currentState$.asObservable()


  constructor() {
    this.initState()
   }

  private initState(){
    const currentState = localStorage.getItem('state')

    if(currentState){
      this.currentState$.next(currentState as PossibleState)
    }
  }

  setState(state: PossibleState){
    this.currentState$.next(state)
    localStorage.setItem('state', state)
  }
}

