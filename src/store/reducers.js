import logger from '../logger';
import types from "./types";

const initialState = {
    quote: 'Creativity is intelligence having fun.',
    author: 'Albert Einstein',
    contacts:[],
    lists:[],
    tasks:[],
    views:[],
    stocks:[],
    currentUser: 'Welcome, please login in.',
    currentPage: 'Home',
    authorized: false,
};

const reducer = (state = initialState, action) => {

    logger.debug('[reducer]', action.type);

    switch (action.type) {
        case(types.RECEIVE_RANDOM_QUOTE):
            return ({
                ...state,
                quote: action.payload.quote,
                author: action.payload.author
            });
        case(types.CHANGE_NAME):
        console.log("Reducer change name: ", action.type );
            return ({
                ...state,
                //quote: action.payload.quote,
                currentUser: "Welcome " + action.payload
            });
            case(types.GET_CURRENT_PAGE):
            console.log("Reducer get currentPage: ", action.type );
                return ({
                    ...state,
                    currentPage: action.payload
                });
            case(types.GET_CONTACTS):
            console.log("Reducer get contacts: ", action.type );
                return ({
                    ...state,
                    contacts: action.payload
                });
                // cooper s  - add authorization
                case(types.AUTH_USER):
                    console.log("Reducer auth user: " + action.payload );
                    return ({
                        ...state,
                        authorize: action.payload
                    });  
            case(types.CLOSE_PAGE) :
                console.log("Reducer close page: " + action.payload );   
                return ({
                    ...state,
                    currentPage: "Home"
                })
        default:
            return state;
    }
};

export { initialState, reducer };