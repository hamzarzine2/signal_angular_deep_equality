// src/app/child/child.component.ts
import {Component, computed, effect, EventEmitter, input, OnInit, Output} from '@angular/core';
import {User} from "../parent/parent.component";

type OurUser = {
  id: number;
  name: string;
  lastName: string;
  userTypeDescription: string;
};

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  standalone: true,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  public user = input.required<OurUser, User>({
    transform: (value) => ({
      id: value.id,
      name: value.name,
      lastName: value.lastName,
      userTypeDescription: this.mapTypeString(value.userType)
    })
  });
  protected readonly currentUser = computed(() => this.user(), {equal: (a, b) => a.userTypeDescription === b.userTypeDescription});
  @Output() update = new EventEmitter();

  public updateButton() {
    this.update.emit(this.user());
  }

  public mapTypeString(type: string) {
    return type + " as description";
  }
}
