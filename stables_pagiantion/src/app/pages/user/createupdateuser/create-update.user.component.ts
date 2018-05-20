import { Component, OnInit,AfterViewInit,ViewContainerRef } from '@angular/core';
import { UserInfo } from '../../../models/user.info.models';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalVal } from '../../../global-val/global.val';


@Component({
  selector: 'app-user.createupdate',
  templateUrl: './create-update.user.component.html',
  styleUrls: ['./create-update.user.component.css']
})
export class CreateUpdateUserComponent implements OnInit,AfterViewInit {
  userinfo;
  success;
  loading = false;
  createUpdateLbl;
  parmId;
  activeLink;
  constructor( private globalVal: GlobalVal,
     private route: ActivatedRoute,
     private alertService: AlertService, 
     private router: Router,
      private userService: UserService) {
        
      const routeParams = this.route.snapshot.params;
      this.parmId = routeParams.id;
      if (this.parmId) {
        this.createUpdateLbl = 'Update User';
          
             this.getUserById(this.parmId);

       } else {
           this.createUpdateLbl = 'Create User';
      }
   }

   ngAfterViewInit() {
  
   }

  ngOnInit() {
    this.globalVal.ngOnInit();
    this.userinfo = new UserInfo();   // THREE
    $("#mitem1").addClass('active');
  
      
      
  }

   getUserById(id: number): void {
    if (id) {
         this.userService.getUserById(id).subscribe(
        user => {
          this.userinfo = user;
        },
        error => {
          console.log(error);
       });
      }
  }

  createUpdateUser(): void {
    
    if (this.parmId) {
       this.updateUser();
    } else {
        this.createUser();
    }
  }

  createUser(): void {
    this.loading = true;
    this.userService.createUser(this.userinfo)
      .subscribe( data => {
          this.loading = false;
          this.alertService.success('User created successfully.', true);
           setTimeout((router: Router) => {
             this.router.navigate(['users']);
            }, 2000);
         },
         error => {
             this.alertService.error("Check database connection. connection error!");
             this.loading = false;
         });
  }

  updateUser(): void {
    this.loading = true;
    this.userService.updateUser(this.userinfo)
      .subscribe( data => {
          this.loading = false;
          this.alertService.success('User update successfully.', true);
            setTimeout((router: Router) => {
               this.router.navigate(['users']);
            }, 2000);
         },
         error => {
             this.alertService.error(error);
             this.loading = false;
         });

  }
}
