
export class TaskService{
  public taskStore: Array<Task> = [];

  constructor() {
    const tasks = [
      {
        name: 'Code html table',
        deadline: 'Jun 24 2020',
        pomodorosRequired: 1
      },
      {
        name: 'Suicide',
        deadline: 'Jul 1 2021',
        pomodorosRequired: 2
      },
      {
        name: 'Code something funny',
        deadline: 'Feb 9 2021',
        pomodorosRequired: 4
      }
    ]
    this.taskStore = tasks.map(task => {
      return {
        name: task.name,
        deadline: new Date(task.deadline),
        queued: false,
        pomodorosRequired: task.pomodorosRequired
      };
    });
  }
}
