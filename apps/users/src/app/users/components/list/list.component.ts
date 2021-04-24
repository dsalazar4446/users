import { UserFormComponent } from './../user-form/user-form.component';
import { IUser } from '@interfaces';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  dataSource: Array<IUser> = [];
  displayedColumns: string[] = ['name', 'surname', 'age', 'actions'];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.spinner.show();
    this.userService.list().subscribe(
      (resp) => {
        this.dataSource = resp;
        this.spinner.hide();
      },
      (err) => {
        console.log(err);
        this.spinner.hide();
      }
    );
  }

  add() {
    const dialogRef = this.dialog.open(UserFormComponent, {
      disableClose: true,
      autoFocus: true,
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.init();
    });
  }

  edit(user: IUser) {
    const dialogRef = this.dialog.open(UserFormComponent, {
      disableClose: true,
      autoFocus: true,
      width: '300px',
      data: {
        user,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.init();
    });
  }

  delete(id) {
    this.spinner.show();
    this.userService.delete(id).subscribe(
      () => {
        this.init()
        this.spinner.hide();
      },
      err => {
        this.spinner.hide();
      }
    )
  }
}
