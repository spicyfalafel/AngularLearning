import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {RootComponent} from './root/root.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Forum} from './forum/forum.component';
import {ShowPostComponent} from './forum/show-post/show-post.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AddPostPopupComponent} from "./forum/add-post/add-post-popup.component";
import {CommonService} from "./service/common.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {PomodoroComponent} from "./pomodoro/pomodoro.component";
import {PomodoroTaskComponent} from "./pomodoro/pomodoro-task/pomodoro-task.component";

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    Forum,
    ShowPostComponent,
    AddPostPopupComponent,
    RegisterComponent,
    HomeComponent,
    PomodoroComponent,
    PomodoroTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [ LoginService, HttpClient, CommonService],
  entryComponents: [AddPostPopupComponent],
  bootstrap: [RootComponent]
})
export class AppModule {
  constructor() {
    library.add(faEdit, faTrashAlt)
  }
}
