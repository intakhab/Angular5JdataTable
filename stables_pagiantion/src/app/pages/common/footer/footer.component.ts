import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  template:
  `<footer class="sticky-footer">
      <div class="text-center">
        <small>Copyright © CBI 2018</small>
      </div>
  </footer>
  `
})
export class FooterComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
