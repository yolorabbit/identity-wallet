export default {
  API_URL: 'http://64.226.109.201:3000/v1/',
  SERVER_URL: 'http://64.226.109.201:3000',
  IMAGE_URL: 'http://64.226.109.201:3000/uploads/images/',
  AVATAR_URL: 'http://64.226.109.201:3000/uploads/avatars/',
  // API_URL: 'http://172.16.92.131:3000/v1/',
  // SERVER_URL: 'http://172.16.92.131:3000',
  // IMAGE_URL: 'http://172.16.92.131:3000/uploads/images/',
  // AVATAR_URL: 'http://172.16.92.131:3000/uploads/avatars/',

  REVENUE_PUBLIC_KEY: 'appl_wicYplIKihdHboKFywyLBMzNXRO',

  Signup: 'auth/register',
  Signin: 'auth/login',

  EmailConfirmation: 'auth/email-confirmation',
  ResendEmailConfirmation: 'auth/send-email-confirmation',
  ForgotPassword: 'auth/forgot-password',
  ConfirmResetPassword: 'auth/reset-password',
  ChangePassword: 'user/change-password',
  ChangePlan: 'user/change-plan',
  Me: 'user/me',
  Upload: 'upload',
  User:'user',
  Notification:'notification',
  UpdateNotification:'notification/status/update',

  NotificationRegsiter: 'notification-tokens',

  Logout: 'auth/logout',

  Showingdate: {
    agent: {
      all: 'showingdate/agent/get/listall',
      today: 'showingdate/agent/get/today',
      upcoming: 'showingdate/agent/get/upcoming',
      complete: 'showingdate/agent/get/complete',
      cancel: 'showingdate/agent/get/cancel',
      status: 'showingdate/agent/status',
      
      note: 'showingdate/agent/note',
      addNote: 'showingdate/agent/note/add',

      addProperty: 'showingdate/agent/property/addOne',
      updateProperty: 'showingdate/agent/property/updateOne',
      deleteProperty: 'showingdate/agent/property/deleteOne',
      getProperty: 'showingdate/agent/property/gets',

      propertyNote: 'showingdate/property/note',
      addPropertyNote: 'showingdate/property/note/addOne',
      getPropertyNote: 'showingdate/property/note/gets',
    },
    client: {
      all: 'showingdate/client/get/listall',
      today: 'showingdate/client/get/today',
      upcoming: 'showingdate/client/get/upcoming',
      complete: 'showingdate/client/get/complete',
      cancel: 'showingdate/client/get/cancel',
      status: 'showingdate/client/status',
      request: 'showingdate/client/get/request',

      comment: 'showingdate/client/comment',
      addComment: 'showingdate/client/comment/add',
      getComment: 'showingdate/client/comment/gets',
    },
    add: 'showingdate/add',
    update: 'showingdate/update',
    get: 'showingdate/get',
    all: 'showingdate/all',
  },
  contact: 'support/contact',
};
