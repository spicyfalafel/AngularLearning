
export class Post {
  constructor(title : string, description: string) {
    if (title && description){
      this.title = title;
      this.description = description
    }else{
      this.title = '';
      this.description = '';
    }
  }
  public title: string;
  public description: string;
}
