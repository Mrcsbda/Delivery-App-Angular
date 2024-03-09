import { Component } from '@angular/core';

@Component({
  selector: 'edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrl: './edit-user-profile.component.scss'
})
export class EditUserProfileComponent {
  isEditingProfilePicture: boolean = false;

  goBack = () => {
    window.history.back()
  }
}
