import { Component } from '@angular/core'
import { FakeStateService } from '../service/fake-state.service'

@Component({
  selector: 'app-state2',
  templateUrl: './state2.component.html',
  styleUrls: ['./state2.component.css']
})
export class State2Component{

  constructor(public fakeState: FakeStateService) { }

}
