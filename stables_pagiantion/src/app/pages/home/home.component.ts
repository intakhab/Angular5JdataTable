import { Component, OnInit } from '@angular/core';
import { GlobalVal } from '../../global-val/global.val';
import * as $ from 'jquery';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageLogoPath = this.globalVal.getImgLogoPath();
  constructor(private router: Router,private globalVal: GlobalVal) {
  }
  ngOnInit() {
  }

}
