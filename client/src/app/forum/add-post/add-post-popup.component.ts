import {Component, Input} from "@angular/core";
import {ModalDismissReasons, NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddPostService} from "./add-post.service";
import {Post} from "../../models/post.model";
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-post-popup',
  templateUrl: './add-post-popup.html',
  providers: [AddPostService]
})
export class AddPostPopupComponent {
  public title;
  public description;


  constructor(public activeModal: NgbActiveModal, public addPostService: AddPostService,
              public commonService: CommonService) {
  }

  add() {
    if (this.title && this.description) {
      this.addPostService.postThePost(new Post(this.title, this.description)).subscribe(res => {
        this.activeModal.close('Close click');
        this.commonService.notifyPostAddition();
      })
    } else {
      alert('Type something')
    }

  }
}
