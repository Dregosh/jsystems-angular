import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent implements OnInit {
  time = ''

  update() {
    this.time = (new Date()).toLocaleTimeString()
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.update()

    setInterval(() => {
      this.update()
      this.cdr.detectChanges()
    }, 1_000)
  }

}
