import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  template:
`
<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
          <h5> Do you want to delete user?</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" id="delBtn" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
  `
})
export class DelModalComponent implements OnInit {

  constructor() { }
   
  ngOnInit() {
    var _self = this;
  }
   deleteUser(userId) {
      // alert(userId);
   }
}
