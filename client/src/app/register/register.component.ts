import {Component, OnInit} from "@angular/core";
import {Status, Step} from "./register-form-models/step";

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./styles/register.component.scss', './styles/form.scss']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    this.initSteps();
  }
  currentStep = 1;
  steps: Step[] = [];

  constructor() {
  }

  nextStep(){
    let index = this.steps.findIndex(el => el.Id == this.currentStep);
    this.steps[index].Status = Status.Done;
    if (index < this.steps.length -1){
      ++index;
      this.currentStep = this.steps[index].Id;
      this.steps[index].Status = Status.Active
    }
  }
  initSteps() {
    this.steps = [
      {
        Id: 1,
        Header: 'Profile',
        Status: Status.Done
      },
      {
        Id: 2,
        Header: 'Password',
        Status: Status.Active
      },
      {
        Id: 3,
        Header: 'Finish',
        Status: Status.Inactive
      }
    ]
  }

  getClassName(status: Status) {
    let result = '';
    switch (status) {
      case Status.Active:
        result = 'active';
        break;
      case Status.Inactive:
        result = 'inactive';
        break;
      case Status.Done:
        result = 'done'
    }
    return result;
  }
}
