import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FakeStateService {

  currentState: PossibleState = 'first'

  constructor() {
    this.initState()
   }

  private initState(){
    const currentState = localStorage.getItem('state')

    if(currentState){
      this.currentState = currentState as PossibleState
    }
  }

  setState(state: PossibleState){
    this.currentState = state
    localStorage.setItem('state', state)
  }
}


type PossibleState = 'first' | 'second' | 'third'
