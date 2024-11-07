type IRole = 'customer' | 'partner';

type ILogin = {
  email: string;
  password: string;
  deviceId: string;
}

type ISignUp = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  role?: IRole;
  password?: string;
  confirmPassword?: string,
  avatar?: string;
  businessName?: string;
  businessAddress?: string;
}

type IConfirmResetPassword = {
  password: string;
  passwordConfirmation: string;
  code: string;
};
type IChangePassword = {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
};

type IKeypadValue = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0' | 'del';
type IImageKeys = 'back00' | 'back01' | 'back02' | 'back03' | 'back10' | 'back11' | 'back12' | 'back13' | 'back20' | 'back21' | 'back22' | 'back23' | 'back30' | 'back31' | 'back32' | 'back33' | 'back40' | 'back41' | 'back42' | 'back43';

type IInformation = {
  passport: string;
  idcard: string;
  education: string;
}

type IUser = {
  email: string;
  password?: string;
  did?: string;
  phone_number?: string;
  first_name: string;
  last_name: string;
  information?: string;
}

type IVerificationMethod = {
  id: string;
  type: string;
  controller: string;
  publicKeyHex: string;
}

type IService = {
  id: string;
  type: string;
  serviceEndpoint: string;
}

type IDIDDocument = {
  "@context": string;
  id: string;
  verificationMethod: Array<IVerificationMethod>,
  authentication: Array<string>,
  service: Array<IService>
}

type IAuthRes = {
  user: IUser;
  tokens: {
    access: {
      token: string;
      expires: Date;
    };
    refresh: {
      token: string;
      expires: Date;
    }
  };
}

type IPayment = {
  holderName: string;
  cardNumber: string;
  expired: string,
  cvc: string;
}

type IContact = {
  subject: string;
  email: string;
  message: string;
}

type IComment = {
  _id?: string;
  noteId: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type IProeprtyNote = {
  _id?: string;
  userId: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type INote = {
  _id?: string;
  userId: string;
  message: string;
  comments?: IComment[];
  createdAt?: Date;
  updatedAt?: Date;
}

type IProperty = {
  _id?: string
  imgurl: string;
  address: string;
  price: string,
  timefrom: Date;
  timeto: Date;
  order: number;
  propertyNotes?: IProeprtyNote[];
}

type IShowingDate = {
  id?: string;
  _id?: string;
  title: string;
  starttime: Date;
  endtime: Date;
  description: string;
  status?: 'pending' | 'confirm' | 'cancel';
  clients: {
    _id: string;
    status?: string;
    decline_reason?: string;
  }[],
  properties: IProperty[];
  notes?: INote[];
}

type INotifiKind = 'create' | 'decline' | 'accept' | 'reminder' | 'cancel';

type INotification = {
  id: string;
  title: string;
  description: string;
  contentId?: string;
  kind: INotifiKind;
  status: boolean;
  createdAt?: Date;
}

export type {
  IRole,
  ILogin,
  ISignUp,
  IConfirmResetPassword,
  IChangePassword,
  IUser,
  IAuthRes,
  IPayment,
  IContact,

  IDIDDocument,
  IInformation,

  IComment,
  INote,
  IProperty,
  IProeprtyNote,
  IShowingDate,
  INotifiKind,
  INotification,

  IKeypadValue,
  IImageKeys
};
