import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileSocial!:string;
  public socialUploaded!:boolean;

  constructor() {
    // constructor
  }

  ngOnInit(): void {
    this.profileSocial = '';
    this.socialUploaded = false;
  }
}
