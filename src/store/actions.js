import types from "./types";

export const useActions = (state, dispatch) => ({
    requestRandomQuote: payload => dispatch({type: types.REQUEST_RANDOM_QUOTE, payload: payload}),
    requestChangeName: payload => dispatch({type: types.CHANGE_NAME, payload: payload}),
    requestCurrentPage: payload => dispatch({type: types.GET_CURRENT_PAGE, payload: payload} ),
    requestContacts: payload => dispatch({type: types.GET_CONTACTS, payload: payload} ),
    authUser: payload => dispatch({ type: types.AUTH_USER, payload: payload }),
    closePage: payload => dispatch({ type: types. CLOSE_PAGE, payload: payload }),
});