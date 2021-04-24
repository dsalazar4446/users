import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ListComponent } from './components/list/list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [UsersComponent, ListComponent, UserFormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgxSpinnerModule,
  ],
})
export class UsersModule {}
