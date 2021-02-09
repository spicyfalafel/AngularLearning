import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'countdown',
  templateUrl: './countdown.component.html'
})
export class CountdownComponent implements OnInit {
  seconds: number;
  @Input() readonly pomodoroMinutes: number;
  minutes: number;
  isPaused: boolean;
  buttonLabel: string;
  @Output() complete: EventEmitter<any> = new EventEmitter<any>();
  @Output() progress: EventEmitter<[number, number]> = new EventEmitter();

  ngOnInit(): void {
    this.resetPomodoro();
    setInterval(() => this.tick(), 1000);
  }

  constructor() {
  }

  tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'Pause';
      console.log('button label is ' + this.buttonLabel);
      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetPomodoro();
          this.complete.emit(null);
        }
      }
      this.progress.emit([this.minutes, this.seconds]);
    }
  }

  private resetPomodoro() {
    this.minutes = this.pomodoroMinutes - 1;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (this.minutes < this.pomodoroMinutes - 1 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }
}
