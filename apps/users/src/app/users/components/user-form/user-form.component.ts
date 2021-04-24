import { IUser } from './../../../../../../../libs/api-interfaces/src/lib/interfaces/user.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'users-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  edit: boolean = false;

  get name() {
    return this.userForm.get('name');
  }
  get surname() {
    return this.userForm.get('surname');
  }
  get age() {
    return this.userForm.get('age');
  }

  constructor(
    private dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private userService: UserService
  ) {}

  ngOnInit(): void {

    if (this.data) {
      this.edit = true;
    }
    this.formInit();
  }

  formInit() {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      age: [
        null,
        [Validators.required, Validators.min(1), Validators.max(120)],
      ],
    });
    console.log('this.edit', this.edit);
    console.log('this.data', this.data);

    if (this.edit) {
      console.log(this.data.user);

      this.userForm.patchValue({
        name: this.data.user.name,
        surname: this.data.user.surname,
        age: this.data.user.age,
      });
    }

  }

  onSubmit() {
   if (!this.edit) {
     this.create()
   } else {
      this.editUser()
   }
  }


  create() {
     this.spinner.show();
     this.userService.create(this.userForm.value).subscribe(
       (resp) => {
         this.spinner.hide();
         this.dialogRef.close(resp);
       },
       (err) => {
         this.spinner.hide();
       }
     );
  }

  editUser() {
    this.spinner.show();
    const user: IUser = {
      idUser: this.data.user.idUser,
      ...this.userForm.value,
    };
    this.userService
      .update(user)
      .subscribe(
        (resp) => {
          this.spinner.hide();
          this.dialogRef.close(resp);
        },
        (err) => {
          this.spinner.hide();
        }
      );
  }

  close() {
    this.dialogRef.close();
  }
}
