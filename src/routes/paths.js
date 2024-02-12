export const PATHS = {
  index: '/',
  client: '/client/:photographerId/:clientId/:galleryId',
  publics: {
    index: '/publics',
    login: '/publics/login',
    signin: '/publics/signin',

  },
  privates: {
    index: '/private',
    table: '/private/table',
    clientGallery: '/private/clientgallery',
    openGallery: '/private/opengallery',
    galleries: '/private/galleries'
  }

}
