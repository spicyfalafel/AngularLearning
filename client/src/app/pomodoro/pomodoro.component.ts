import {Component} from "@angular/core";

@Component({
  selector: 'pomodoro',
  templateUrl: './pomodoro.component.html'
})
export class PomodoroComponent{
  readonly pomodoroMinutes = 1;
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor() {
    this.resetPomodoro();
    setInterval(() => this.tick(), 1000);
  }

  tick(): void{
    if (!this.isPaused){
      this.buttonLabel = 'Pause';
      if (--this.seconds < 0){
        this.seconds = 59;
        if ( -- this.minutes < 0){
          this.resetPomodoro();
        }
      }
    }

  }

  private resetPomodoro() {
    this.minutes = this.pomodoroMinutes-1;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }

  togglePause(){
    this.isPaused = !this.isPaused;

    if (this.minutes < this.pomodoroMinutes-1 || this.seconds < 59){
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }
}
