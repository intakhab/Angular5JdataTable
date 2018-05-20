import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../../services/index';
import { GlobalVal } from '../../global-val/global.val';


@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    imgHeader = this.globalVal.getImgLogoPath();
    model: any = {};
    loading = false;
    error = '';

    constructor(private globalVal: GlobalVal, 
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        
    }

    login():void {
        this.loading = true;
        this.authenticationService.
        login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    localStorage.setItem('userToken', this.model.username);
                    this.router.navigate(['/users']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
