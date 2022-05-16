import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

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

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.update()

    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.update()
        this.cdr.detectChanges()
      }, 1_000)
    })
  }

}
