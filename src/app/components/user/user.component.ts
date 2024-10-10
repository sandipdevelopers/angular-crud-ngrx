import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../core/model/user.model';
import * as UserActions from '../../core/actions/user.actions';
import { Observable } from 'rxjs';
import { UserState } from '../../core/reducer/user.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  users$: Observable<User[]>;
  userForm: FormGroup;
  editingUser: User | null = null;

  constructor(private store: Store<{ users: UserState }>, private fb: FormBuilder) {
    this.users$ = this.store.select(state => state.users.users);
    this.userForm = this.createForm();
  }

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      if (this.editingUser) {
        this.store.dispatch(UserActions.updateUser({ user }));
      } else {
        this.store.dispatch(UserActions.addUser({ user }));
      }
      this.resetForm();
    }
  }

  resetForm() {
    this.userForm.reset();
    this.editingUser = null;
  }

  editUser(user: User) {
    this.editingUser = user;
    this.userForm.patchValue(user);
  }

  deleteUser(id: string) {
    this.store.dispatch(UserActions.deleteUser({ id }));
  }
}
