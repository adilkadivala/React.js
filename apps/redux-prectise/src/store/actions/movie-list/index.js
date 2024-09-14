export const updateLoader = (value) => {
  return {
    type: 'update_loader',
    value,
  };
};

export const updateError = (value) => {
  return {
    type: 'update_error',
    value,
  };
};

export const updateData = (value) => {
  return {
    type: 'update_Data',
    value,
  };
};

export const addToCart = (value) => {
  return {
    type: 'update_cart',
    value,
  };
};

export const removeFromCart = (value) => {
  return {
    type: 'remove_cart',
    value,
  };
};
