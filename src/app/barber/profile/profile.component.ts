import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialModalComponent } from './social-modal/social-modal.component';
import { UnsubscribeOnDestroyAdapter } from '../../../app/shared/UnsubscribeOnDestroyAdapter';
import { EmployeeService } from 'src/app/human-resources/employee.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { ProfileImgComponent } from './profile-img/profile-img.component';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { AssetsService } from 'src/app/assets/assets.service';
import { Employee } from 'src/app/models/employee.model';
import { trucks } from 'src/app/models/assets.model';
import { firstValueFrom } from 'rxjs';

export interface ImageData {
  image: string;
  thumbImage: string;
  title: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  public profileSocial!: string;
  public profileImage!: string;
  public name!: string;
  public phone!: string;
  public email!: string;
  public id!: string;
  public socialUploaded!: boolean;
  public data!: any;
  public assets: any = 'No Asigned Yet';
  public plate: any = 'No Asigned Yet';
  public model: any = 'No Asigned Yet';
  public make: any = 'No Asigned Yet';

  currentIndex = -1;
  showFlag = false;

  public instagram_link: any = '';
  async getLink() {
    const user = this.authservice.getCurrentUser();
    const datos = await this.employeeservice.getAllEmployeesAxios();
    let id;
    await datos.forEach((e: any) => {
      if (user.attributes.sub === e.sub) {
        return (id = e.id);
      }
    });

    return this.employeeservice.getdataEmployeebyId(id);
  }
  constructor(
    private dialog: MatDialog,
    public employeeservice: EmployeeService,
    public assetsservice: AssetsService,
    public authservice: AuthService
  ) {
    super();
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

  add_link() {
    const dialogRef = this.dialog.open(SocialModalComponent, {
      width: '750px',
      height: '305px',
      data: {
        data: this.data.data.body,
      },
    });
    this.subs.sink = dialogRef.afterClosed().subscribe();
  }
  showLightbox(index: number) {
    this.currentIndex = index;
    this.showFlag = true;
  }
  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

  async getUrlProfileImage(sub: any) {
     const fileName = sub + '.jpeg';

    const config:any = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://awbkpur9r9.execute-api.us-east-1.amazonaws.com/profile/user/image/getUrl?fileName=' + fileName,
      headers: { 
        'Content-Type': 'application/json'
      }
    };
    return axios.request(config)
    .then(async (response) => {
      const datos = (response.data.imageUrl)?response.data.imageUrl:'assets/images/user/usrbig3.jpg';
      const config:any = {
        method: 'get',
        maxBodyLength: Infinity,
        url: datos,
        headers: { 
          'Content-Type': 'application/json'
        }
      };
        return datos
    })
    .catch((error) => {
      console.log(error);
      return 'assets/images/user/usrbig3.jpg';
    });
  }

  async getAssetById(){
    return await firstValueFrom(this.assetsservice.getAllAssets());
  }

  async ngOnInit(): Promise<void> {
    this.data = await this.getLink();
    this.profileImage = await this.getUrlProfileImage(this.data.data.body.sub);
    this.id = this.data.data.body.id;
    this.name = this.data.data.body.name;
    this.phone = this.data.data.body.phone;
    this.email = this.data.data.body.email;
    this.instagram_link = ('social_links' in this.data.data.body)? this.data.data.body.social_links[0]:'';
    this.assets = (await this.getAssetById()).body
    this.assets.map((asset:any) => {
      if (asset.barber === this.name) {
        this.plate = this.assets['0'].plate;
        this.id = this.assets['0'].id;
        this.make = this.assets['0'].make;
        this.model = this.assets['0'].model;
      }
    }).filter((asset:any) => asset !== null);
    
  }

  async add_profile_img() {
    const user = await this.authservice.getCurrentUser();
    console.log(user.attributes.sub);

    const dialogRef = this.dialog.open(ProfileImgComponent, {
      width: '750px',
      height: '225px',
      data: {
        sub: user.attributes.sub,
      },
    });

    this.subs.sink = dialogRef.afterClosed().subscribe();
  }
}
