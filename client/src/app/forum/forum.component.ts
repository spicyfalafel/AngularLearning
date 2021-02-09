import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddPostPopupComponent} from "./add-post/add-post-popup.component";

@Component({
  selector: 'app-home',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
  providers: [NgbModal]
})
export class Forum {

  constructor(private modalService: NgbModal) {
  }

  openAddPopup() {
    const modalRef = this.modalService.open(AddPostPopupComponent);
  }
}


