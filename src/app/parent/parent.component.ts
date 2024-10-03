// src/app/parent/parent.component.ts
import {Component} from '@angular/core';
import {UserType} from '../user-type.enum';
import {ChildComponent} from "../child/child.component";

export type User = { id: number, name: string, lastName: string, userType: UserType }

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  standalone: true,
  imports: [
    ChildComponent
  ],
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // Define the object with id, name, lastname, and userType (enum)
  user: User = {
    id: 1,
    name: 'John',
    lastName: 'Doe',
    userType: UserType.Admin
  };

  public update(event: any) {
    this.user.userType = UserType.Guest;
    // this.user ={
    //   ...this.user,
    //   userType: UserType.Guest
    // }
  }
}
