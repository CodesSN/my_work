import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { ROUTES } from './sidebar-items';
import { AuthService } from 'src/app/core/service/auth.service';
import { RouteInfo } from './sidebar.metadata';
import { EmployeeService } from 'src/app/pages/human-resources/employee.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  public sidebarItems!: RouteInfo[];
  public innerHeight?: number;
  public bodyTag!: HTMLElement;
  public data!: any;
  listMaxHeight?: string;
  listMaxWidth?: string;
  userFullName?: string;
  userImg?: string;
  userType?: string;
  headerHeight = 60;
  currentRoute?: string;
  routerObj;
  showSideBar!:boolean;
  menuIcon = 'radio_button_checked';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    public authService: AuthService,
    public employeeservice: EmployeeService,
    private router: Router
  ) {
    this.elementRef.nativeElement.closest('body');
    this.routerObj = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // close sidebar on mobile screen after menu select
        this.renderer.removeClass(this.document.body, 'overlay-open');
      }
    });
  }
  @HostListener('window:resize', ['$event'])
  windowResizecall() {
    this.setMenuHeight();
    this.checkStatuForResize(false);
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.document.body, 'overlay-open');
    }
  }
  callToggleMenu(event: Event, length: number) {
    if (length > 0) {
      const parentElement = (event.target as HTMLInputElement).closest('li');
      const activeClass = parentElement?.classList.contains('active');

      if (activeClass) {
        this.renderer.removeClass(parentElement, 'active');
      } else {
        this.renderer.addClass(parentElement, 'active');
      }
    }
  }
  async getData() {
    const user = JSON.parse(
      localStorage.getItem(
        'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.' +
          localStorage.getItem(
            'CognitoIdentityServiceProvider.1rim5srfn6rjcthd8f4knu1r29.LastAuthUser'
          ) +
          '.userData'
      ) as string
    ).UserAttributes;
    // console.log(user);

    const datos = await this.employeeservice.getAllEmployeesAxios();
    let id;
    await datos.forEach((e: any) => {
      if (user[0].Value === e.sub) {
        return (id = e.id);
      }
    });
    return this.employeeservice.getdataEmployeebyId(id);
  }
  async ngOnInit(): Promise<void> {
    this.data = await this.getData();
    this.userType = this.data.data.body.id_role;
    this.sidebarItems = ROUTES.filter((sidebarItem) => (sidebarItem.role_access.includes((this.userType?.toString())as string))? sidebarItem:null);
    // this.sidebarItems = ROUTES.filter((sidebarItem) => sidebarItem);
    // const id = await this.employeeservice.getIDEmployee();
    // this.employeeservice.getEmployeeData(id).subscribe(response => {
    //   console.log(response);
    // });

    this.initLeftSidebar();
    this.bodyTag = this.document.body;
  }
  ngOnDestroy() {
    this.routerObj.unsubscribe();
  }
  initLeftSidebar() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;
    // Set menu height
    _this.setMenuHeight();
    _this.checkStatuForResize(true);
  }
  setMenuHeight() {
    this.innerHeight = window.innerHeight;
    let height = this.innerHeight - this.headerHeight;
    height = height - 100;
    this.listMaxHeight = height + '';
    this.listMaxWidth = '500px';
  }
  isOpen() {
    return this.bodyTag.classList.contains('overlay-open');
  }
  checkStatuForResize(firstTime: boolean) {
    if (window.innerWidth < 1170) {
      this.renderer.addClass(this.document.body, 'ls-closed');
    } else {
      this.renderer.removeClass(this.document.body, 'ls-closed');
    }
  }
  mouseHover() {
    const body = this.elementRef.nativeElement.closest('body');
    if (body.classList.contains('submenu-closed')) {
      this.renderer.addClass(this.document.body, 'side-closed-hover');
      this.renderer.removeClass(this.document.body, 'submenu-closed');
    }
  }
  mouseOut() {
    const body = this.elementRef.nativeElement.closest('body');
    if (body.classList.contains('side-closed-hover')) {
      this.renderer.removeClass(this.document.body, 'side-closed-hover');
      this.renderer.addClass(this.document.body, 'submenu-closed');
    }
  }
  mobileMenuSidebarOpen(event: Event, className: string) {
    const hasClass = (event.target as HTMLInputElement).classList.contains(
      className
    );
    if (hasClass) {
      this.renderer.removeClass(this.document.body, className);
    } else {
      this.renderer.addClass(this.document.body, className);
    }
  }
  callSidemenuCollapse() {
    const hasClass = this.document.body.classList.contains('side-closed');
    if (hasClass) {
      this.renderer.removeClass(this.document.body, 'side-closed');
      this.renderer.removeClass(this.document.body, 'submenu-closed');
      this.menuIcon = 'radio_button_checked';
    } else {
      this.renderer.addClass(this.document.body, 'side-closed');
      this.renderer.addClass(this.document.body, 'submenu-closed');
      this.menuIcon = 'radio_button_unchecked';
    }

    const sideClosedHover =
      this.document.body.classList.contains('side-closed');
    if (sideClosedHover) {
      this.renderer.removeClass(this.document.body, 'side-closed-hover');
    }
  }
  logout() {
    // this.authService.logout().subscribe((res) => {
    //   if (!res.success) {
    //     this.router.navigate(['/authentication/signin']);
    //   }
    // });
    console.log('logout');

  }
}
