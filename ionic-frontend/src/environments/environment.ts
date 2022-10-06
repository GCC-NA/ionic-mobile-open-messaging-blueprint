// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  transcriptAPIBaseURL: 'https://aydgc1zhwb.execute-api.us-east-1.amazonaws.com/Demo/transcript/integration/',
  notificationAPIBaseURL: 'https://aydgc1zhwb.execute-api.us-east-1.amazonaws.com/Demo/notification/integration/',
  integrations: [
    {
      id: 'f82005da-dbe8-4868-8cd2-682f7b5b8210',
      type: 'chat'
    },
    {
      id: 'f82005da-dbe8-4868-8cd2-682f7b5b8210',
      type: 'offers'
    },
  ],
  userId: 'davinogustini@gmail.com',
  firstName: 'Davino',
  lastName: 'Gustini',
  chatBranding: {
    faImageClass: 'fa fa-comments fa-3x',
    iconLabel: 'Chat'
  },
  notificationBranding: {
    faImageClass: 'fa fa-bell fa-3x',
    iconLabel: 'Sale'
  },
  homeBranding: {
    faImageClass: 'fa fa-home fa-3x',
    iconLabel: 'Shop'
  },
  headerIconUrl: '../assets/icon/wayfairlogo.png',
  homePageTitle: 'Sofas.',
  homePageSubTitle: 'Shop > Living Room Furniture ',
  homePageDetails: [
    'Audriana 78" Recessed Arm Modular Sofa',
    'By Andover Mills',
    'from $335.99 with Free Shipping'
  ],
  homePageProductImageUrl: '../assets/icon/Sofa.webp',
  homePageProductLink: 'https://www.wayfair.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
