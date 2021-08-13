import { maybe } from '@7urtle/lambda';

import types from "../types";
import logger from '../../logger';
import { requestChangeName } from '../effects/NameEffect';

/**
 * getQuote is a hook that processes requesting a quote through QuoteEffect asynchronously.
 * 
 * It logs error on failure of QuoteEffect or in case that QuoteEffect result is Nothing (null,
 * undefined, or empty).
 * 
 * On success it dispatches RECEIVE_RANDOM_QUOTE to reducer with the value of the quote.
 * 
 * @impure
 * @param {function} dispatch // dispatch function of the reducer middleware
 * @param {object} action // action object containing request data
 * @returns {null}
 */
export const changeName = dispatch => action =>
    requestChangeName(action) // returns AsyncEffect, can be replaced by getQuoteFromNetlify(action)
        .trigger
        ("Error in Async Effect: ", logger.error) // error in AsyncEffect
        (maybe // success in AsyncEffect
            (() => logger.error('Changing state name for fame,')) // Maybe result is Nothing
            (value => dispatch({type: types.CHANGE_NAME, payload: value})) // Maybe result is Just
        );