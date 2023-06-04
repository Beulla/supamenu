// SearchStore.js
let searchValue = '';

export const setSearchValue = (value) => {
  searchValue = value;
};

export const getSearchValue = () => {
  return searchValue;
};
