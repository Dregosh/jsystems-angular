import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  time = ''

  update() {
    this.time = (new Date()).toLocaleTimeString()
    // this.myInputRef // Property 'myInputRef' does not exist 
  }

  constructor() {
  }

  ngOnInit(): void {
    this.update()
  }

}
