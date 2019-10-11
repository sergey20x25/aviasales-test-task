import uuid from 'uuid/v4';

const addIds = (array) => {
  array.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.id = uuid();
  });
};

const formatTwoDigits = (value) => {
  const str = String(value);
  const newStr = str.length === 1 ? `0${str}` : str;
  return newStr;
};

const addMinutes = (date, minutes) => new Date(date.getTime() + minutes * 60000);

const getStartAndFinishTime = (dateString, duration) => {
  const date = new Date(dateString);
  const hours = formatTwoDigits(date.getHours());
  const minutes = formatTwoDigits(date.getMinutes());
  const endDate = addMinutes(date, duration);
  const endHours = formatTwoDigits(endDate.getHours());
  const endMinutes = formatTwoDigits(endDate.getHours());
  return `${hours}:${minutes} - ${endHours}:${endMinutes}`;
};

const splitNumber = (number) => {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};

const formatDuration = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const formated = h ? `${h}ч ${m}м` : `${m}м`;
  return formated;
};

const getDeclension = (n, forms) => {
  let number = Math.abs(n) % 100;
  if (number >= 5 && number <= 20) {
    return forms[2];
  }
  number %= 10;
  if (number === 1) {
    return forms[0];
  }
  if (number >= 2 && number <= 4) {
    return forms[1];
  }
  return forms[2];
};

export {
  addIds,
  getDeclension,
  getStartAndFinishTime,
  formatDuration,
  splitNumber,
};
