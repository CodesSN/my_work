import { Component, OnInit } from '@angular/core';

export interface ImageData {
  image: string;
  thumbImage: string;
  title: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileSocial!:string;
  public socialUploaded!:boolean;

  currentIndex = -1;
  showFlag = false;

  constructor() {
    // constructor
  }


  imageObject: Array<ImageData> = [
    {
      image: 'assets/images/image-gallery/1.jpg',
      thumbImage: 'assets/images/image-gallery/1.jpg',
      title: 'Image 1',
    },
    {
      image: 'assets/images/image-gallery/2.jpg',
      thumbImage: 'assets/images/image-gallery/2.jpg',
      title: 'Image 2',
    },
    {
      image: 'assets/images/image-gallery/3.jpg',
      thumbImage: 'assets/images/image-gallery/3.jpg',
      title: 'Image 3',
    },
    {
      image: 'assets/images/image-gallery/4.jpg',
      thumbImage: 'assets/images/image-gallery/4.jpg',
      title: 'Image 4',
    },
  ];

  showLightbox(index: number) {
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

  ngOnInit(): void {
    this.profileSocial = '';
    this.socialUploaded = false;
  }
}
