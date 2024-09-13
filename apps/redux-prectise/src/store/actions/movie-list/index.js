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
