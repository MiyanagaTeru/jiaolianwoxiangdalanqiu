export const ENTER_NUMBER = 'enter number';
export const SHOW_BRACKET = 'show bracket';
export const CHANGE_PAGE = 'displayPage/change';

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page
});