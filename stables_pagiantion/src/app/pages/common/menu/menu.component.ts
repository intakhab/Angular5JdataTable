import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserInfo } from '../../../models/user.info.models';
import { UserService } from '../../../services/user.service';
import {Observable} from 'rxjs/Observable';
import { GlobalVal } from '../../../global-val/global.val';
import { DOCUMENT } from "@angular/platform-browser";



@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  imageLogoPath = this.globalVal.getImgLogoPath();
  users: UserInfo[] = [];
  userName;
  tokens;

  constructor(private globalVal: GlobalVal, private userService: UserService) {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userName = currentUser.username;
    this.globalVal.ngOnInit();
   }

    ngOnInit() {
      
        // get users from secure api end point
        $(".nav-item #mitem1").click(function() {
           $("#mitem1").addClass('active');
           $("#mitem2").removeClass('active');
        });
         $(".nav-item #mitem2").click(function() {
           $("#mitem2").addClass('active');
           $("#mitem1").removeClass('active');
         });
     }
      
  }

