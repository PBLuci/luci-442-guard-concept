import { Component } from '@angular/core'
import { FakeStateService } from '../service/fake-state.service'

@Component({
  selector: 'app-state3',
  templateUrl: './state3.component.html',
  styleUrls: ['./state3.component.css']
})
export class State3Component {

  constructor(public fakeState: FakeStateService) { }
}
