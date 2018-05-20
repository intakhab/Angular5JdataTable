import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { UserInfo } from '../../../models/user.info.models';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { GlobalVal } from '../../../global-val/global.val';


declare var $: any;


@Component({
  selector: 'app-user.search',
  templateUrl: './search.user.component.html',
  styleUrls: ['./search.user.component.css']
})


export class SearchUserComponent implements OnInit, AfterViewInit {
  userinfo: UserInfo[];
  loading = false;
  //dtOptions: DataTables.Settings = {};
  table;

  constructor(private _ngZone: NgZone,
    private globalVal: GlobalVal,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
    private userService: UserService) {
  }
  ngAfterViewInit() {
  }
  ngOnInit() {
    this.globalVal.ngOnInit();
    this.router.events
      .subscribe((event) => {
        console.log(event);
        if (event instanceof NavigationEnd) {
          console.log('NavigationEnd:', event);
        }
      });
      $("#mitem1").addClass('active');

      this.loadUsers();

  }

  loadUsers(): void {
    var _self = this;
    var tt = $("#example").DataTable({
      /* "pagingType": 'full_numbers',
        "paging": true,
        pageLength: -1*/
      //"responsive": true,
      "processing": true,
      "serverSide": true,
      "order": [[1, 'asc']],
      /* "initComplete": function() {
        $('#example_filter input').unbind();
        tt.serverSide=false;
        $('#example_filter input').bind('keyup', function(e) {
            if(e.keyCode == 13) {
              tt.serverSide=true;
              tt.search(this.value).draw();
              tt.ajax.reload();
                if (tt.data().count() == 0) {
                  _self.checkNanData(tt.data().count());
                }
            }
        });
        $('#example_filter input').bind('change', function(e) {

         });
        },*/
     
      //"dom": '<"top"i>rt<"bottom"flp><"clear">'
      "ajax": {
        "url": 'http://localhost:8080/CbServerApi/api/users/paginated',
        "data": function (data) {
          //process data before sent to server.

          console.log(JSON.stringify(data));

        },
        error: function (error) {
          this.alertService.error(error);
        }
      },
      "columns": [
        { "data": "userId", "name": "USER_ID", "title": "USER ID" },
        { "data": "firstName", "name": "FIRST_NAME", "title": "First Name" },
        { "data": "lastName", "name": "LAST_NAME", "title": "Last Name" },
        { "data": "age", "name": "AGE", "title": "Age" },
        { "data": "phone", "name": "PHONE", "title": "Phone" },
        { "data": "salary", "name": "SALARY", "title": "Salary" },
        {
          data: null,
          className: "center",
          defaultContent:
            `<td class="button">
               <input type='hidden' id="uId" class="uId" />
                      <button  ng-click="changeClass()"  style='color:blue;font-size: .8em !important' id="editId" title='Edit User' data-toggle="modal"><span class="glyphicon fa fa-pencil-square" arial-hidden="true"></span></button>
                      <button   style='color:red;font-size: .8em !important' class="btn2" id="delId"  data-toggle="modal" data-target="#exampleModalCenter"  title='Delete User'> 
                       <span class="fa fa-times-circle fa-lg text-danger" aria-hidden="true"></span></button>
               </td>
              `
        }
      ],
      "columnDefs": [
        {
          "targets": [0],
          "visible": false,
          "searchable": false
        }
      ]

    });
  
  //  tt.ajax.reload();
    // this.dtOptions = {
    // };
    $(document).ready(function () {

      /* $('#example tbody').on('click', 'tr', function () {
        var data = tt.row(this).data();
        $("#uId").val(data.userId);
       });*/
      $('#example tbody').on('click', '#editId', function () {
        _self.editUser($("#uId").val());
      });

      $('#example tbody').on('mouseover', 'tr', function () {
        var data = tt.row(this).data();
        if(data!=null && data.userId!='undefinded'){
           $("#uId").val(data.userId);
        }
      });

      $('#example tbody').on('click', '#delId', function () {
        _self.deleteUser($("#uId").val());
      });
      //Bugs Fix
      $('#example_filter').on('keyup keypress change', 'input', function () {
        if (tt.data().count() == 0) {
          $("#example_info").hide();
          $("#example_paginate").hide();
        } else {
          $("#example_info").show();
          $("#example_paginate").show();
          $("#example").dataTable().fnDraw();
        }
      });
      //
    });

  }
checkNanData(val){
  
   if (val == 0) {
          $("#example_info").hide();
          $("#example_paginate").hide();
        } else {
          $("#example_info").show();
          $("#example_paginate").show();
        }
}
  getAllUsers():void {
    this.userService.getUserDetails()
      .subscribe(users => {
        this.userinfo = users;
      },
        error => {
          this.alertService.error(error);
        });
  }
  editUser(userId) : void {
    //some time edit page is not calling init method
    this._ngZone.run(() => {
      this.router.navigate(['/users/edit', userId]);
    });
  }

  changeClass():void {
    alert("toogle")
  }
  deleteUser(id): void {
    const self = this;
    $('#exampleModalCenter #delBtn').click(function () {
      if (id == '') {
        id = $("#uId").val();
      }
      $('#exampleModalCenter').modal('hide');
      self.userService.deleteUserById(id)
        .subscribe(users => {
          self.alertService.success('User deleted successfully.', true);
          const dt = $("#example").dataTable();
          dt.fnDraw();
          // $.fn['dataTable'].ext.search.pop();
          // setInterval(function () {
          /* self._ngZone.run(() => {
              observer.next('/users');
              observer.complete();
           });*/
          //  window.location.href = "users";
          // $('#example').empty();
          // self.getAllUsers();
          // $('#example').DataTable();
          // }, 1000);
        },
          error => {
            self.alertService.error(error);
            //self.alertService.error('Internal server error..check database connection.' , { cssClass: 'alert alert-warning fade in', timeout: 4000 });
          });
    });
  }

}

