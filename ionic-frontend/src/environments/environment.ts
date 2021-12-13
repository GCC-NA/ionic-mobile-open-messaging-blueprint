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
    iconLabel: 'Athlete Connect'
  },
  notificationBranding: {
    faImageClass: 'fa fa-bell fa-3x',
    iconLabel: 'Offers'
  },
  homeBranding: {
    faImageClass: 'fa fa-home fa-3x',
    iconLabel: 'Shop'
  },
  headerIconUrl: '../assets/icon/Logo_NIKE.svg',
  homePageTitle: 'Just Do It.',
  homePageSubTitle: 'Shop > Shoes > Air Jordan',
  homePageDetails: [
    'The Air Jordan 11 is one of the Jordan Brand\'s most memorable releases. This retro takes inspiration from the ' +
    'original that MJ wore en route to his 4th championship ring. It uses premium materials and full-length Nike Air cushioning.',
    'Shown: Medium Grey/Multi-Color/Multi-Color',
    'Style: CT8012-005'
  ],
  homePageProductImageUrl: '../assets/icon/air-jordan.jpeg',
  homePageProductLink: 'https://www.nike.com/w/jordan-shoes-37eefzy7ok'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
