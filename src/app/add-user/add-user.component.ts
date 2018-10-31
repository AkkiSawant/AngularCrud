import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  addForm: FormGroup;

  testData:any;

  

  ngOnInit() {

    // this.addForm = this.formBuilder.group({
    //   id: [],
    //   email: ['', Validators.required],
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required]
    // });
    this.addForm = this.formBuilder.group({
      banking_customer_no: [],
      customer_no: ['', Validators.required],
      one_click_id: ['', Validators.required],
      name: ['', Validators.required],
      mid_name:[],
      surname:[]
    });

  }

  onSubmit() {
    this.userService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-user']);
        alert("Data from post"+JSON.stringify(data));
        console.log(data);
      });
  }

  getTestData(){
    this.userService.getTestData().subscribe(data=>{
      this.testData=data;
      alert("Data from get call" + JSON.stringify(this.testData));
      console.log(JSON.stringify(data));
    });
  }

}
