import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User API] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User API] Load Users Failure', props<{ error: string }>());

export const addUser = createAction('[User] Add User', props<{ user: User }>());
export const addUserSuccess = createAction('[User API] Add User Success', props<{ user: User }>());
export const addUserFailure = createAction('[User API] Add User Failure', props<{ error: string }>());

export const updateUser = createAction('[User] Update User', props<{ user: User }>());
export const updateUserSuccess = createAction('[User API] Update User Success', props<{ user: User }>());
export const updateUserFailure = createAction('[User API] Update User Failure', props<{ error: string }>());

export const deleteUser = createAction('[User] Delete User', props<{ id: string }>());
export const deleteUserSuccess = createAction('[User API] Delete User Success', props<{ id: string }>());
export const deleteUserFailure = createAction('[User API] Delete User Failure', props<{ error: string }>());
