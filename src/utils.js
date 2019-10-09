import uuid from 'uuid/v4';

const addIds = (array) => {
  array.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.id = uuid();
  });
};

export { addIds };
