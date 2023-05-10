import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Dashboard",
    iconType: "feather",
    icon: "grid",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    submenu: [
      {
        path: "dashboard/dashboard1",
        title: "Barbers",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        submenu: [],
      },
      {
        path: "dashboard/dashboard2",
        title: "Sales",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "Human Resources",
    iconType: "feather",
    icon: "users",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    submenu: [
      {
        path: "/hr/dashboard",
        title: "Dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        submenu: [],
      },
      {
        path: "/hr/config",
        title: "List",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "Vans",
    iconType: "feather",
    icon: "truck",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    submenu: [
      {
        path: "/assets/config",
        title: "List",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        submenu: [],
      },
    ],
  },
  {
    path: "contacts",
    title: "Config",
    iconType: "feather",
    icon: "edit",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    submenu: [
      {
        path: "contacts",
        title: "Users",
        iconType: "feather",
        icon: "user-plus",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        submenu: [],
      },
      {
        path: "/apps/support",
        title: "Roles",
        iconType: "feather",
        icon: "user",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        submenu: [],
      },
    ],
  },
  {
    path: "rating",
    title: "rating",
    iconType: "feather",
    icon: "star",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    submenu: [],
  },
//   {
//     path: "advance-table",
//     title: "MENUITEMS.ADVANCE-TABLE.TEXT",
//     iconType: "feather",
//     icon: "trello",
//     class: "",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [],
//   },
//   {
//     path: "calendar",
//     title: "MENUITEMS.CALENDAR.TEXT",
//     iconType: "feather",
//     icon: "calendar",
//     class: "",
//     groupTitle: false,
//     badge: "New",
//     badgeClass: "badge bg-blue sidebar-badge float-end",
//     submenu: [],
//   },

//   // Common Modules

//   {
//     path: "",
//     title: "MENUITEMS.APPS.TEXT",
//     iconType: "",
//     icon: "",
//     class: "",
//     groupTitle: true,
//     badge: "",
//     badgeClass: "",
//     submenu: [],
//   },

//   {
//     path: "task",
//     title: "MENUITEMS.TASK.TEXT",
//     iconType: "feather",
//     icon: "check-circle",
//     class: "",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [],
//   },
  // {
  //   path: "contacts",
  //   title: "MENUITEMS.CONTACTS.TEXT",
  //   iconType: "feather",
  //   icon: "user-plus",
  //   class: "",
  //   groupTitle: false,
  //   badge: "",
  //   badgeClass: "",
  //   submenu: [],
  // },
//   {
//     path: "",
//     title: "MENUITEMS.EMAIL.TEXT",
//     iconType: "feather",
//     icon: "mail",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/email/inbox",
//         title: "MENUITEMS.EMAIL.LIST.INBOX",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/email/compose",
//         title: "MENUITEMS.EMAIL.LIST.COMPOSE",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/email/read-mail",
//         title: "MENUITEMS.EMAIL.LIST.READ",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "MENUITEMS.MORE-APPS.TEXT",
//     iconType: "feather",
//     icon: "star",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "4",
//     badgeClass: "badge bg-orange sidebar-badge float-end",
//     submenu: [
//       {
//         path: "/apps/chat",
//         title: "MENUITEMS.MORE-APPS.LIST.CHAT",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/apps/dragdrop",
//         title: "MENUITEMS.MORE-APPS.LIST.DRAG-DROP",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/apps/contact-grid",
//         title: "MENUITEMS.MORE-APPS.LIST.CONTACT-GRID",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/apps/support",
//         title: "MENUITEMS.MORE-APPS.LIST.SUPPORT",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "MENUITEMS.WIDGETS.TEXT",
//     iconType: "feather",
//     icon: "gift",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/widget/chart-widget",
//         title: "MENUITEMS.WIDGETS.LIST.CHART-WIDGET",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/widget/data-widget",
//         title: "MENUITEMS.WIDGETS.LIST.DATA-WIDGET",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "MENUITEMS.COMPONENTS.TEXT",
//     iconType: "",
//     icon: "",
//     class: "",
//     groupTitle: true,
//     badge: "",
//     badgeClass: "",
//     submenu: [],
//   },
//   {
//     path: "",
//     title: "MENUITEMS.FORMS.TEXT",
//     iconType: "feather",
//     icon: "layout",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/forms/form-controls",
//         title: "MENUITEMS.FORMS.LIST.CONTROLS",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/forms/advance-controls",
//         title: "MENUITEMS.FORMS.LIST.ADVANCE",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/forms/form-example",
//         title: "MENUITEMS.FORMS.LIST.EXAMPLE",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/forms/form-validation",
//         title: "MENUITEMS.FORMS.LIST.VALIDATION",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/forms/wizard",
//         title: "MENUITEMS.FORMS.LIST.WIZARD",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/forms/editors",
//         title: "MENUITEMS.FORMS.LIST.EDITORS",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "MENUITEMS.TABLES.TEXT",
//     iconType: "feather",
//     icon: "grid",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/tables/basic-tables",
//         title: "MENUITEMS.TABLES.LIST.BASIC",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/tables/material-tables",
//         title: "MENUITEMS.TABLES.LIST.MATERIAL",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/tables/ngx-datatable",
//         title: "MENUITEMS.TABLES.LIST.NGX-DATATABLE",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "Charts",
//     iconType: "feather",
//     icon: "pie-chart",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "7",
//     badgeClass: "badge bg-green sidebar-badge float-end",
//     submenu: [
//       {
//         path: "/charts/echart",
//         title: "Echart",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/charts/apex",
//         title: "Apex",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/charts/chartjs",
//         title: "ChartJS",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/charts/ngx-charts",
//         title: "Ngx-Charts",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/charts/gauge",
//         title: "Gauge",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "User Interface (UI)",
//     iconType: "feather",
//     icon: "copy",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/ui/alerts",
//         title: "Alerts",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/badges",
//         title: "Badges",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/chips",
//         title: "Chips",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/modal",
//         title: "Modal",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/buttons",
//         title: "Buttons",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/expansion-panel",
//         title: "Expansion Panel",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/bottom-sheet",
//         title: "Bottom Sheet",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/dialogs",
//         title: "Dialogs",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/cards",
//         title: "Cards",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/labels",
//         title: "Labels",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/list-group",
//         title: "List Group",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/snackbar",
//         title: "Snackbar",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/preloaders",
//         title: "Preloaders",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/progressbars",
//         title: "Progress Bars",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/tabs",
//         title: "Tabs",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/typography",
//         title: "Typography",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/ui/helper-classes",
//         title: "Helper Classes",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "Medias",
//     iconType: "feather",
//     icon: "image",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/media/gallery",
//         title: "Image Gallery",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "Timeline",
//     iconType: "feather",
//     icon: "git-merge",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/timeline/timeline1",
//         title: "Timeline 1",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/timeline/timeline2",
//         title: "Timeline 2",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "Icons",
//     iconType: "feather",
//     icon: "feather",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/icons/material",
//         title: "Material Icons",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/icons/font-awesome",
//         title: "Font Awesome",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "Authentication",
//     iconType: "feather",
//     icon: "user-check",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/authentication/signin",
//         title: "Sign In",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/authentication/signup",
//         title: "Sign Up",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/authentication/forgot-password",
//         title: "Forgot Password",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/authentication/locked",
//         title: "Locked",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/authentication/page404",
//         title: "404 - Not Found",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/authentication/page500",
//         title: "500 - Server Error",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "Extra Pages",
//     iconType: "feather",
//     icon: "anchor",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/extra-pages/profile",
//         title: "Profile",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/extra-pages/pricing",
//         title: "Pricing",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/extra-pages/invoice",
//         title: "Invoice",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/extra-pages/faqs",
//         title: "Faqs",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/extra-pages/blank",
//         title: "Blank Page",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "Maps",
//     iconType: "feather",
//     icon: "map-pin",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/maps/google",
//         title: "Google Map",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
//   {
//     path: "",
//     title: "Multi level Menu",
//     iconType: "feather",
//     icon: "chevrons-down",
//     class: "menu-toggle",
//     groupTitle: false,
//     badge: "",
//     badgeClass: "",
//     submenu: [
//       {
//         path: "/multilevel/first1",
//         title: "First",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//       {
//         path: "/",
//         title: "Second",
//         iconType: "",
//         icon: "",
//         class: "ml-sub-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [
//           {
//             path: "/multilevel/secondlevel/second1",
//             title: "Second 1",
//             iconType: "",
//             icon: "",
//             class: "ml-menu2",
//             groupTitle: false,
//             badge: "",
//             badgeClass: "",
//             submenu: [],
//           },
//           {
//             path: "/",
//             title: "Second 2",
//             iconType: "",
//             icon: "",
//             class: "ml-sub-menu2",
//             groupTitle: false,
//             badge: "",
//             badgeClass: "",
//             submenu: [
//               {
//                 path: "/multilevel/thirdlevel/third1",
//                 title: "third 1",
//                 iconType: "",
//                 icon: "",
//                 class: "ml-menu3",
//                 groupTitle: false,
//                 badge: "",
//                 badgeClass: "",
//                 submenu: [],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: "/multilevel/first3",
//         title: "Third",
//         iconType: "",
//         icon: "",
//         class: "ml-menu",
//         groupTitle: false,
//         badge: "",
//         badgeClass: "",
//         submenu: [],
//       },
//     ],
//   },
];
