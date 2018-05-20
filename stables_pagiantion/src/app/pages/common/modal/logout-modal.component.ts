import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout-modal',
  template:
  `<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Do you want to Leave?</h5>
      <button class="close" type="button" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary"  type="button" data-dismiss="modal">Cancel</button>
     <a class="btn btn-primary" href="/login">Logout</a>
    </div>
  </div>
</div>
  `
})
export class LogoutModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
