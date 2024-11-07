import type { StackScreenProps } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TYPES } from '.';

export type ApplicationStackParamList = {
	Startup: undefined;
	Example: undefined;
	Sample: undefined;
};

export type AuthScreens = {
	Home: undefined;
	Welcome: undefined;
	Onboarding: undefined;
	Login: undefined;
	Signup: undefined;
	CreatePassword: undefined;
	GenerateSeedPhrase: undefined;
	CreatePasscode: undefined;
	ReenterPasscode: undefined;
	ForgotPassword: undefined;
	BusinessDetails: undefined;
	Bookings: undefined;
}

export type HomeScreens = {
	Dashboard: undefined;
	Calendar: undefined;
	NewShowingDate: undefined;
	More: undefined;
	Profile: undefined;
	EditProfile: undefined;
	ChangePassword: undefined;
	Subscription: undefined;
	ChangeFont: undefined;
	Policy: undefined;
	Terms: undefined;
	UserResetPassword: undefined;
	Notification: undefined;
}

export type BottomTabScreens = MoreScreens & {
	Home: undefined;
	Booking: undefined;
	Support: undefined;
	Profile: undefined;	
	Bookings: undefined;
	Business: undefined;
	Services: undefined;
	Staff: undefined;
	Account: undefined;
	Identity: undefined;
};
export type PartnerBottomTabScreens = PartnerMoreScreens & {
	Bookings: undefined;
	Business: undefined;
	Services: undefined;
	Staff: undefined;
	Account: undefined;
};

export type MoreScreens = {
	Bottom: undefined;
	PartnerBottom: undefined;
	NailBooking: undefined;
	Store: undefined;
	DateTime: undefined;
	Extra: undefined;
	Summary: undefined;
	Payment: undefined;
	BookingDetails: undefined;
	Reschedule: undefined;
	Support: undefined;
	Faq: undefined;
	About: undefined;
	UpdateProfile: undefined;
	UpdatePassword: undefined;
	AddIdentifier: undefined;
}
export type PartnerMoreScreens = {
	Bottom: undefined;
	Edit: undefined;
}

export type AuthScreenProps = StackScreenProps<AuthScreens>;
export type BottomScreenProps = BottomTabScreenProps<BottomTabScreens>;
export type MoreScreenProps = StackScreenProps<MoreScreens>;

export type AppScreenProps = StackScreenProps<HomeScreens>;

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;
