import { Component, OnInit } from '@angular/core'
import { FakeStateService } from '../service/fake-state.service'

@Component({
  selector: 'app-state1',
  templateUrl: './state1.component.html',
  styleUrls: ['./state1.component.css']
})
export class State1Component implements OnInit {

  constructor(public fakeService: FakeStateService) { }

  ngOnInit(): void {
  }
}
