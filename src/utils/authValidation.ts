const validateName = (name: string) => {
  const nameRegex = /(.|\s)*\S(.|\s)*/;
  return nameRegex.test(name);
};

const validateEmailAddress = (email: string) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return emailRegex.test(email);
};

const validateEightNumber = (password: string) => {
  const passwordRegex = /^.{8,}$/;
  return passwordRegex.test(password);
};

const validateMobilePhoneNumber = (number: string) => {
  const mobilePhoneNumberRegex = /^\d{8,}$/;
  return mobilePhoneNumberRegex.test(number);
};

const validatePassword = (password: string) => {
  const reg = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return reg.test(password);
}
const validateOneLowerCase = (password: string) => {
  const passwordRegex = /^(?=.*?[a-z])/;
  return passwordRegex.test(password);
};
const validateOneUpperCase = (password: string) => {
  const passwordRegex = /^(?=.*?[A-Z])/;
  return passwordRegex.test(password);
};
const validateOneDigit = (password: string) => {
  const passwordRegex = /^(?=.*?[0-9])/;
  return passwordRegex.test(password);
};
const validateOneSpecial = (password: string) => {
  const passwordRegex = /^(?=.*?[#?!@$%^&*-])/;
  return passwordRegex.test(password);
};

export {
  validateName,
  validateEmailAddress,
  validateEightNumber,
  validatePassword,
  validateMobilePhoneNumber,
  validateOneLowerCase,
  validateOneUpperCase,
  validateOneDigit,
  validateOneSpecial,
};
