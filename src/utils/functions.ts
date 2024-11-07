import { format, startOfDay, subDays } from "date-fns";

const getPrice = (price: number) => {
  return ((price / 1000) + 'K').replace('.', ',');
}

const getShowingTime = (date: Date) => {
  if (startOfDay(date).valueOf() === startOfDay(new Date()).valueOf())
    return format(date, 'p');
  else if (startOfDay(date).valueOf() === startOfDay(subDays(new Date(), 1)).valueOf())
    return `Yesterday ${format(date, 'p')}`;
  else
    return format(date, 'P p');
}

const isValidated = (error: any) => {
  let result = true;
  Object.keys(error).forEach((key) => {
    if (error[key])
      result = false;
  })

  return result;
}

export {
  getPrice,
  getShowingTime,
  isValidated,
};
