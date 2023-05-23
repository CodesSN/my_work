import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialModalComponent } from './social-modal/social-modal.component';
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';
import { EmployeeService } from 'src/app/pages/human-resources/employee.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { ProfileImgComponent } from './profile-img/profile-img.component';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { AssetsService } from 'src/app/pages/assets/assets.service';
import { Employee } from 'src/app/models/employee.model';
import { trucks } from 'src/app/models/assets.model';
import { firstValueFrom } from 'rxjs';
import { ModalFullViewComponent } from 'src/app/shared/components/gallery/modal-full-view/modal-full-view.component';

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
  public assetImage:any = 'assets/images/user/usrbig3.jpg';
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
    const sub = this.employeeservice.getSub();
    const datos = await this.employeeservice.getAllEmployeesAxios();
    // console.log(datos);

    let id;
    await datos.forEach((e: any) => {
      if (sub === e.sub) {
        return (id = e.id);
      }
    });
    // console.log(id);


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
      image: 'assets/images/barber-temp/1.png',
      thumbImage: 'assets/images/barber-temp/1.png',
      title: 'Image 1',
    },
    {
      image: 'assets/images/barber-temp/2.png',
      thumbImage: 'assets/images/barber-temp/2.png',
      title: 'Image 2',
    },
    {
      image: 'assets/images/barber-temp/3.png',
      thumbImage: 'assets/images/barber-temp/3.png',
      title: 'Image 3',
    },
    {
      image: 'assets/images/barber-temp/4.png',
      thumbImage: 'assets/images/barber-temp/4.png',
      title: 'Image 4',
    },
    {
      image: 'assets/images/barber-temp/5.png',
      thumbImage: 'assets/images/barber-temp/5.png',
      title: 'Image 4',
    },
    {
      image: 'assets/images/barber-temp/6.png',
      thumbImage: 'assets/images/barber-temp/6.png',
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
    const dialogRef = this.dialog.open(ModalFullViewComponent, {
      width: '750px',
      height: '225px',
      data: {
        imageObject: this.imageObject,
        currentIndex:index
      },
    });
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
    console.log('data', this.data);

    this.profileImage = await this.getUrlProfileImage(this.data.data.body.sub);
    this.id = this.data.data.body.id;
    this.name = this.data.data.body.name;
    this.phone = this.data.data.body.phone;
    this.email = this.data.data.body.email;
    this.instagram_link = ('social_links' in this.data.data.body)? this.data.data.body.social_links[0]:'';
    this.assets = (await this.getAssetById()).body
    this.assets.map((asset:any) => {
      if (asset.barber === this.name) {
        this.plate = asset.plate;
        this.id = asset.id;
        this.make = asset.make;
        this.model = asset.model;
        this.assetImage = 'https://eminentlimo.com/wp-content/uploads/2022/03/Executive-Sprinter-12-Passenger-400-x-262-Flip.png'
      }
    }).filter((asset:any) => asset !== null);

  }

  async add_img(zone:string) {
    const user = JSON.parse(
      localStorage.getItem(
        'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.' +
          localStorage.getItem(
            'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.LastAuthUser'
          ) +
          '.userData'
      ) as string
    ).UserAttributes
    console.log(user[0].Value);

    const dialogRef = this.dialog.open(ProfileImgComponent, {
      width: '750px',
      height: '225px',
      data: {
        sub: user[0].Value,
        zone
      },
    });

    this.subs.sink = dialogRef.afterClosed().subscribe();
  }
}
