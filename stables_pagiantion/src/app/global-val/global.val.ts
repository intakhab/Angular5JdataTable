import { Injectable, OnInit } from '@angular/core';


@Injectable()
export class GlobalVal implements OnInit {

  getRootURL() {
    return 'http://localhost:8080/CbServerApi';

  }
  getImgLogoPath() {
    //return '/CbServerApi/assets/static/images/logo2.png';
    return './assets/static/images/logo2.png'
  }
  ngOnInit() {
    $('#sidenavToggler').click(function (e) {
      e.preventDefault();
      $('body').toggleClass('sidenav-toggled');
      $('.navbar-sidenav .nav-link-collapse').addClass('collapsed');
      $('.navbar-sidenav .sidenav-second-level .navbar-sidenav .sidenav-third-level')
        .removeClass('show');
    });

    // Scroll to top button appear
    $('[data-toggle]').click(function () {
      $('body').toggleClass('sidenav-toggled');
    });

    $('.navbar-sidenav .nav-link-collapse').click(function (e) {
      e.preventDefault();
      $('body').removeClass('sidenav-toggled');
    });
  
  }
}

