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
    iconLabel: 'Connect'
  },
  notificationBranding: {
    faImageClass: 'fa fa-bell fa-3x',
    iconLabel: 'Offers'
  },
  homeBranding: {
    faImageClass: 'fa fa-home fa-3x',
    iconLabel: 'Home'
  },
  headerIconUrl: '../assets/icon/MercuryInsuranceLogo.png',
  homePageTitle: 'Mercury Insurance',
  homePageSubTitle: 'Products > Insurance > Auto',
  homePageDetails: [
    'Save hundreds by switching to Mercury Insurance!',
    'Don\'t sacrifice service, coverage, or price!',
    'Trusted by millions since 1962',
    'Easy Claims Process',
    'Convenient Customer Portal',
    'Guaranteed Repairs'
  ],
  homePageProductImageUrl: 'https://www.mercuryinsurance.com/assets/images/mi-logo-web.svg',
  homePageProductLink: 'https://www.mercuryinsurance.com/insurance/auto/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
