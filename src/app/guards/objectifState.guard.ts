import { inject } from '@angular/core'
import { CanMatchFn } from '@angular/router'
import { map } from 'rxjs'
import { PossibleState } from '../interface/state'
import { FakeStateService } from '../service/fake-state.service'

export function MatchOnStateGuard(forState: PossibleState) : CanMatchFn {
  return (route, segment) => {
    const fakeStateService = inject(FakeStateService)

    return fakeStateService.currentStateObs$.pipe(
      map( currentState => {
        return currentState === forState
      })
    )
  }
}
