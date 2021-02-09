import {Component} from "@angular/core";

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
})
export class PomodoroComponent {

  timeout: [number, number];
  onCountdownCompleted(): void {
    alert('Time up!');
  }
}
